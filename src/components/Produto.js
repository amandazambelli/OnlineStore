import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
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
