import React from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  async componentDidMount() {
    const data = await getCategories();
    const test = await getProductsFromCategoryAndQuery('', 'martelo');
    console.log(test);
    console.log(data);
  }

  render() {
    return (
      <div className="App" />
    );
  }
}

export default App;
