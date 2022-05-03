import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsCart3 } from 'react-icons/bs';
import style from './ProductPage.module.css';
import { getProduct } from '../services/api';

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: false,
      email: '',
      nota: '1',
      avaliacao: '',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true },
      async () => {
        const data = await getProduct(id);
        this.setState({
          product: data,
          loading: false,
        });
      });
  }

  updateForm = (id, email, nota, avaliacao) => {
    const { addReviews } = this.props;
    addReviews(id, email, nota, avaliacao);
    this.setState({
      email: '',
      nota: '1',
      avaliacao: '',
    });
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  renderAttributes = (product) => {
    if (Object.keys(product).length !== 0) {
      return (
        product.attributes
          .map((attribute) => (
            <p key={ attribute.id }>
              {`${attribute.name}: ${attribute.value_name}`}
            </p>
          ))
      );
    }
  }

  freeShipping = (product) => {
    if (product.shipping !== undefined && product.shipping.free_shipping) {
      return <p data-testid="free-shipping">Frete Grátis</p>;
    }
  }

  render() {
    const { product, loading, email, nota, avaliacao } = this.state;
    const { addToCart, allReviews, match, cart } = this.props;
    const { id } = match.params;
    return (
      <div className={ style.container }>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          <BsCart3
            className={ style.containerCart }
          />
        </Link>
        <p data-testid="shopping-cart-size">{ cart.length }</p>
        <br />
        <br />
        <div className={ style.secondDiv }>
          { loading && <h2>Loading</h2> }
          <p data-testid="product-detail-name">
            { product.title }
          </p>
          <p>{ product.price }</p>
          { this.freeShipping(product) }
          <img src={ product.thumbnail } alt={ product.title } />
          <br />
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => addToCart(product) }
          >
            Adicionar ao carrinho
          </button>
          <p>Especificação técnicas</p>
          { this.renderAttributes(product) }
          <div>
            <input
              required
              name="email"
              type="text"
              value={ email }
              onChange={ this.handleChange }
              data-testid="product-detail-email"
            />
            <select value={ nota } name="nota" onChange={ this.handleChange }>
              <option data-testid="1-rating" value="1">1</option>
              <option data-testid="2-rating" value="2">2</option>
              <option data-testid="3-rating" value="3">3</option>
              <option data-testid="4-rating" value="4">4</option>
              <option data-testid="5-rating" value="5">5</option>
            </select>
            <textarea
              name="avaliacao"
              value={ avaliacao }
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
            />
            <button
              data-testid="submit-review-btn"
              type="button"
              onClick={ () => this.updateForm(id, email, nota, avaliacao) }
            >
              Avaliar
            </button>
            <div>
              { allReviews !== null && allReviews
                .filter((review) => review.id === id)
                .map((review, index) => (
                  <div key={ index }>
                    <p>{ review.email }</p>
                    <p>{ review.nota }</p>
                    <p>{ review.avaliacao }</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.arrayOf,
  addToCart: PropTypes.func,
  addReviews: PropTypes.func,
  allReviews: PropTypes.arrayOf,
  cart: PropTypes.arrayOf,
}.isRequired;

export default ProductPage;
