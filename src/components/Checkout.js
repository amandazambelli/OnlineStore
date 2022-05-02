import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  render() {
    const { cart } = this.props;
    const ItensUnicos = [...new Set(cart)];
    return (
      <div>
        { ItensUnicos.map((element) => (
          <div key={ element.id }>
            <p data-testid="shopping-cart-product-name">{ element.title }</p>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>{ element.price }</p>
          </div>
        ))}
        ;
      </div>
    );
  }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default Checkout;
