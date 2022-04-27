import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import Pesquisa from './components/Pesquisa';

class App extends React.Component {
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
