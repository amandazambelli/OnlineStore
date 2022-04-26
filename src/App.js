import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Pesquisa from './components/Pesquisa';
import Carrinho from './components/Carrinho';

class App extends React.Component {
  async componentDidMount() {
    const data = await getCategories();
    const test = await getProductsFromCategoryAndQuery('', 'martelo');
    console.log(test);
    console.log(data);
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Pesquisa } />
        <Route exact path="/carrinho" component={ Carrinho } />
      </BrowserRouter>
    );
  }
}

export default App;
