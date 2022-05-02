import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, cpf, phone, cep, address } = this.state;
    const { cart } = this.props;
    const ItensUnicos = [...new Set(cart)];
    return (
      <div>
        <div>
          { ItensUnicos.map((element) => (
            <div key={ element.id }>
              <p data-testid="shopping-cart-product-name">{ element.title }</p>
              <img src={ element.thumbnail } alt={ element.title } />
              <p>{ element.price }</p>
              <p>
                Qtd:
                <span>
                  { cart.filter((item) => item === element).length }
                </span>
              </p>
            </div>
          ))}
          <span>Total da Compra:</span>
          { cart.reduce((acc, item) => acc + item.price, 0)}
        </div>
        <div>
          <input
            name="name"
            value={ name }
            type="text"
            data-testid="checkout-fullname"
            onChange={ this.handleChange }
            placeholder="nome"
          />
          <input
            name="email"
            value={ email }
            type="text"
            data-testid="checkout-email"
            onChange={ this.handleChange }
            placeholder="email"
          />
          <input
            name="cpf"
            value={ cpf }
            type="text"
            data-testid="checkout-cpf"
            onChange={ this.handleChange }
            placeholder="cpf"
          />
          <input
            name="phone"
            value={ phone }
            type="text"
            data-testid="checkout-phone"
            onChange={ this.handleChange }
            placeholder="phone"
          />
          <input
            name="cep"
            value={ cep }
            type="text"
            data-testid="checkout-cep"
            onChange={ this.handleChange }
            placeholder="cep"
          />
          <input
            name="address"
            value={ address }
            type="text"
            data-testid="checkout-address"
            onChange={ this.handleChange }
            placeholder="address"
          />
          <button type="button">Finalizar Compra</button>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default Checkout;
