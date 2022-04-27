import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Produto';
import BarraCategoria from './BarraCategoria';

class Pesquisa extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedProducts: [],
      searchBox: '',
      searched: false,
      idCategory: '',
    };
  }

  searchProduts = async () => {
    const { searchBox, idCategory } = this.state;
    const products = await getProductsFromCategoryAndQuery(idCategory, searchBox);
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

  getId = (id) => {
    this.setState({ idCategory: id });
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
        <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
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
        <BarraCategoria getId={ this.getId } searchProduts={ this.searchProduts } />
        {this.returnText()}
        { searchedProducts
          .map((product) => <Product product={ product } key={ product.id } />)}
      </div>
    );
  }
}

export default Pesquisa;
