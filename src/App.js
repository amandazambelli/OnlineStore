import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import Pesquisa from './components/Pesquisa';
import ProductPage from './components/ProductPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/product/:id" component={ ProductPage } />
        <Route exact path="/" component={ Pesquisa } />
        <Route exact path="/carrinho" component={ Carrinho } />
      </BrowserRouter>
    );
  }
}

export default App;
