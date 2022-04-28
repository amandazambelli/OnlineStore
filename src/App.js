import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import Pesquisa from './components/Pesquisa';
import ProductPage from './components/ProductPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/product/:id"
          render={ (props) => (
            <ProductPage { ...props } addToCart={ this.addToCart } />) }
        />
        <Route
          exact
          path="/"
          render={ (props) => (
            <Pesquisa { ...props } addToCart={ this.addToCart } />) }
        />
        <Route
          exact
          path="/carrinho"
          render={ (props) => (
            <Carrinho { ...props } cart={ cart } />) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
