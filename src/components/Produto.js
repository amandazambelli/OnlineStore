import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Produto.module.css';

class Product extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div data-testid="product" className={ style.container }>
        <p>{ product.title }</p>
        <Link to={ `/product/${product.id}` } data-testid="product-detail-link">
          <img src={ product.thumbnail } alt={ product.title } />
        </Link>
        <p>
          R$
          {' '}
          { product.price }
        </p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho
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
