import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import Pesquisa from './components/Pesquisa';
import ProductPage from './components/ProductPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      allReviews: [],
    };
  }

  componentDidMount() {
    const getReview = localStorage.getItem('avaliacao');
    const reviews = JSON.parse(getReview);
    if (reviews !== null) {
      this.setState({
        allReviews: reviews,
      });
    }

    const carrinho = localStorage.getItem('carrinho');
    const produtosCarrinho = JSON.parse(carrinho);
    if (produtosCarrinho !== null) {
      this.setState({
        cart: produtosCarrinho,
      });
    }
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }), () => {
      const { cart } = this.state;
      localStorage.setItem('carrinho', JSON.stringify(cart));
    });
  }

  removeItemCart = (carrinho, product) => {
    const index = carrinho.lastIndexOf(product);
    carrinho.splice(index, 1);
    this.setState(({ cart: [...carrinho] }
    ), () => {
        const { cart } = this.state;
        localStorage.setItem('carrinho', JSON.stringify(cart));
      });
  }

  addReviews = (id, email, nota, avaliacao) => {
    const review = { id, nota, avaliacao, email };
    this.setState((prevState) => ({
      allReviews: [...prevState.allReviews, review],
    }), () => {
      const { allReviews } = this.state;
      localStorage.setItem('avaliacao', JSON.stringify(allReviews));
    });
  }

  render() {
    const { cart, allReviews } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/product/:id"
          render={ (props) => (
            <ProductPage
              { ...props }
              addToCart={ this.addToCart }
              addReviews={ this.addReviews }
              allReviews={ allReviews }
              cart={ cart }
            />) }
        />
        <Route
          exact
          path="/"
          render={ (props) => (
            <Pesquisa
              { ...props }
              addToCart={ this.addToCart }
              cart={ cart }
            />) }
        />
        <Route
          exact
          path="/carrinho"
          render={ (props) => (
            <Carrinho
              { ...props }
              cart={ cart }
              removeItemCart={ this.removeItemCart }
              addToCart={ this.addToCart }
            />) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
