import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Produto';

class BarraCategoria extends React.Component {
  constructor() {
    super();

    this.state = {
      selecionarCategorias: [],
      buscaCategoria: [],
    };
  }

  async componentDidMount() {
    const categorie = await getCategories();
    this.setState({
      selecionarCategorias: categorie,
    });
    this.getCategory();
  }

  getCategory = async (id) => {
    const products = await getProductsFromCategoryAndQuery(id, '');
    this.setState({
      buscaCategoria: products.results,
    });
  }

  render() {
    const { selecionarCategorias, buscaCategoria } = this.state;
    return (
      <div>
        { selecionarCategorias.map((element) => (
          <button
            type="button"
            key={ element.id }
            data-testid="category"
            value={ element.id }
            onClick={ () => this.getCategory(element.id) }
          >
            { element.name }
          </button>)) }
        { buscaCategoria
          .map((product) => <Product product={ product } key={ product.id } />)}
      </div>
    );
  }
}

export default BarraCategoria;
