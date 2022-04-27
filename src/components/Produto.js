import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{ product.title }</p>
        <Link to={ `/product/${product.id}` } data-testid="product-detail-link">
          <img src={ product.thumbnail } alt={ product.title } />
        </Link>
        <p>
          { product.price }
        </p>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.arrayOf.isRequired,
};

export default Product;
