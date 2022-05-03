import React from 'react';
import PropTypes from 'prop-types';
import { RiAddCircleLine } from 'react-icons/ri';
import { MdRemoveCircleOutline } from 'react-icons/md';
import style from './Carrinho.module.css';

class Carrinho extends React.Component {
  renderCart = () => {
    const { cart } = this.props;
    if (cart.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
  }

  render() {
    const { cart, removeItemCart, addToCart } = this.props;
    const ItensUnicos = [...new Set(cart)];
    return (
      <div className={ style.containerCarrinho }>
        { this.renderCart() }
        { ItensUnicos.map((element) => (
          <div key={ element.id } className={ style.cart }>
            <p
              data-testid="shopping-cart-product-name"
              className={ style.containerTotal }
            >
              { element.title }

            </p>
            <img
              src={ element.thumbnail }
              alt={ element.title }
              className={ style.containerImg }
            />
            <p className={ style.containerPrice }>{ `R$: ${element.price}` }</p>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => removeItemCart(cart, element) }
              className={ style.containerButton }
            >
              <MdRemoveCircleOutline />
            </button>
            <p className={ style.containerButton3 }>
              <span data-testid="shopping-cart-product-quantity">
                { cart.filter((item) => item === element).length }
              </span>
            </p>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => addToCart(element) }
              className={ style.containerButton }
            >
              <RiAddCircleLine />
            </button>
          </div>
        )) }
        <p className={ style.containerTotal }>
          Total Carrinho:
          {' '}
          <span data-testid="product-increase-quantity">{ cart.length }</span>
        </p>
      </div>
    );
  }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,

};

export default Carrinho;
