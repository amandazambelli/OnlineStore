import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      <div>
        { loading && <h2>Loading</h2> }
        <p data-testid="product-detail-name">
          { product.title }
        </p>
        <p>{ product.price }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho

        </button>
        <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
        <p>Especificação técnicas</p>
        { this.renderAttributes(product) }
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.arrayOf,
  addToCart: PropTypes.func,
}.isRequired;

export default ProductPage;
