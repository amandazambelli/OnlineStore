import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Pesquisa from './components/Pesquisa';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Pesquisa } />
      </BrowserRouter>
    );
  }
}

export default App;
