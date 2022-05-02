import React from 'react';
import PropTypes from 'prop-types';

class Carrinho extends React.Component {
  renderCart = () => {
    const { cart } = this.props;
    if (cart.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
  }

  toCheckout = () => {
    const { history } = this.props;
    history.push('/checkout');
  }

  render() {
    const { cart, removeItemCart, addToCart } = this.props;
    const ItensUnicos = [...new Set(cart)];
    return (
      <div>
        { this.renderCart() }
        { ItensUnicos.map((element) => (
          <div key={ element.id }>
            <p data-testid="shopping-cart-product-name">{ element.title }</p>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>{ element.price }</p>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => removeItemCart(cart, element) }
            >
              -
            </button>
            <p>
              <span data-testid="shopping-cart-product-quantity">
                { cart.filter((item) => item === element).length }
              </span>
            </p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => addToCart(element) }
            >
              +
            </button>
          </div>
        )) }
        <p>
          Total Carrinho:
          <span data-testid="product-increase-quantity">{ cart.length }</span>
        </p>
        <button
          type="button"
          onClick={ this.toCheckout }
          data-testid="checkout-products"
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  history: PropTypes.arrayOf.isRequired,

};

export default Carrinho;
