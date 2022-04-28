import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div data-testid="product">
        <p>{ product.title }</p>
        <Link to={ `/product/${product.id}` } data-testid="product-detail-link">
          <img src={ product.thumbnail } alt={ product.title } />
        </Link>
        <p>
          { product.price }
        </p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho
          {' '}
          { product.price }
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.arrayOf.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
