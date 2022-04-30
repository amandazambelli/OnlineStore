import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import style from './Pesquisa.module.css';
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
    if (searchBox.length > 0) this.setState({ idCategory: '' });
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

  searchCategory = async (id) => {
    await this.getId(id);
    await this.searchProduts();
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
    const { addToCart } = this.props;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
        <br />
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
          onClick={ this.searchProduts }
        >
          Buscar
        </button>
        <BarraCategoria searchCategory={ this.searchCategory } />
        {this.returnText()}
        <div className={ style.productList }>
          { searchedProducts
            .map((product) => (
              <Product
                addToCart={ addToCart }
                product={ product }
                key={ product.id }
              />))}
        </div>
      </div>
    );
  }
}

Pesquisa.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Pesquisa;
