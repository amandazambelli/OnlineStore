import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Produto';

class Pesquisa extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedProducts: [],
      searchBox: '',
      searched: false,
    };
  }

  searchProduts = async () => {
    const { searchBox } = this.state;
    const products = await getProductsFromCategoryAndQuery('', searchBox);
    this.setState({
      searchedProducts: products.results,
      searchBox: '',
      searched: true,
    });
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  returnText = () => {
    const { searchedProducts, searched } = this.state;
    if (!searched) {
      return (
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      );
    }
    if (searched && searchedProducts.length === 0) {
      return (
        <h3>
          Nenhum produto foi encontrado
        </h3>
      );
    }
  }

  render() {
    const { searchBox, searchedProducts } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          name="searchBox"
          onChange={ this.handleChange }
          value={ searchBox }
        />
        <button
          type="submit"
          data-testid="query-button"
          id="xpto"
          onClick={ this.searchProduts }
        >
          Buscar
        </button>
        {this.returnText()}
        { searchedProducts
          .map((product) => <Product product={ product } key={ product.id } />)}
      </div>
    );
  }
}

export default Pesquisa;
