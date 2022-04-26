import React from 'react';
import { Link } from 'react-router-dom';

class Pesquisa extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default Pesquisa;
