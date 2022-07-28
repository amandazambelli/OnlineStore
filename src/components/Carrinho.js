import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
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

  toCheckout = () => {
    // const { history } = this.props;
    // history.push('/checkout');
  }

  displayAdd = (cart, element) => {
    const itemQtd = cart.filter((item) => item === element).length;
    console.log(itemQtd);
    console.log(element.available_quantity);
    if (itemQtd >= element.available_quantity) return true;
    return false;
  }

  render() {
    const { cart, removeItemCart, addToCart } = this.props;
    const ItensUnicos = [...new Set(cart)];
    return (
      <div>
        <header>
          <Link
            to="/"
          >
            <h1>Front-End Online Store</h1>
          </Link>
          <Link
            data-testid="shopping-cart-button"
            to="/carrinho"
            className={ style.link }
          >
            <BsCart3 className={ style.cartWidth } />
            <p data-testid="shopping-cart-size">{ cart.length }</p>
          </Link>
        </header>
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
                disabled={ this.displayAdd(cart, element) }
              >
                <RiAddCircleLine />
              </button>
            </div>
          )) }
          <p className={ style.containerTotalCart }>
            Total Carrinho:
            {' '}
            <span data-testid="product-increase-quantity">{ cart.length }</span>
          </p>
          <button
            type="button"
            onClick={ this.toCheckout }
            data-testid="checkout-products"
            className={ style.finalizar }
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    );
  }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  // history: PropTypes.arrayOf.isRequired,

};

export default Carrinho;
