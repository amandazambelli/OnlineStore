import React from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from '../src/services/api'

class App extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    const data = await getCategories();
    const test = await getProductsFromCategoryAndQuery('', 'martelo');
    console.log(test);
    console.log(data)

  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }

}

export default App;
