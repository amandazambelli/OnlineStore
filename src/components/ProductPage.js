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
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true },
      async () => {
        const data = await getProduct(id);
        this.setState({ product: data, loading: false });
      });
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

  render() {
    const { product, loading } = this.state;
    const { addToCart } = this.props;
    return (
      <div className={ style.container }>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          <BsCart3 className={ style.containerCart } />

        </Link>
        <br />
        <br />
        <div className={ style.secondDiv }>
          { loading && <h2>Loading</h2> }
          <h2 data-testid="product-detail-name">
            { product.title }
          </h2>
          <h3>{ `Valor: ${product.price}` }</h3>
          <img src={ product.thumbnail } alt={ product.title } />
          <br />
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => addToCart(product) }
          >
            ADICIONAR
          </button>
          <p>Especificação técnicas</p>
          { this.renderAttributes(product) }
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.arrayOf,
  addToCart: PropTypes.func,
}.isRequired;

export default ProductPage;
