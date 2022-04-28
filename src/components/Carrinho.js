import React from 'react';
import PropTypes from 'prop-types';

class Carrinho extends React.Component {
  renderCart = () => {
    const { cart } = this.props;
    if (cart.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
  }

  render() {
    const { cart } = this.props;
    const ItensUnicos = [...new Set(cart)];
    return (
      <div>
        { this.renderCart() }
        { ItensUnicos.map((element) => (
          <div key={ element.id }>
            <p data-testid="shopping-cart-product-name">{ element.title }</p>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>{ element.price }</p>
            <p>{ cart.filter((item) => item === element).length }</p>
          </div>
        )) }
        <span data-testid="shopping-cart-product-quantity">{ ItensUnicos.length }</span>
      </div>
    );
  }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default Carrinho;
