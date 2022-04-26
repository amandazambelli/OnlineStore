import React from 'react';
import { getCategories } from '../services/api';

class BarraCategoria extends React.Component {
  constructor() {
    super();

    this.state = {
      selecionarCategorias: [],
    };
  }

  async componentDidMount() {
    const categorie = await getCategories();
    this.setState({
      selecionarCategorias: categorie,
    });
  }

  render() {
    const { selecionarCategorias } = this.state;
    return (
      <div>
        { selecionarCategorias.map((element) => (
          <button
            type="button"
            key={ element.id }
            data-testid="category"
          >
            { element.name }
          </button>)) }
      </div>
    );
  }
}

export default BarraCategoria;
