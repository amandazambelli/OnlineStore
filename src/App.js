import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Pesquisa from './components/Pesquisa';
import Carrinho from './components/Carrinho';
import BarraCategoria from './components/BarraCategoria';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Pesquisa } />
        <Route exact path="/carrinho" component={ Carrinho } />
        <BarraCategoria />
      </BrowserRouter>
    );
  }
}

export default App;
