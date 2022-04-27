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
    this.searchProducts();
  }

  render() {
    const { selecionarCategorias } = this.state;
    const { getId } = this.props;
    return (
      <div>
        { selecionarCategorias.map((element) => (
          <button
            type="button"
            key={ element.id }
            data-testid="category"
            value={ element.id }
            onClick={ () => {
              getId(element.id);
            } }
          >
            { element.name }
          </button>)) }
      </div>
    );
  }
}

export default BarraCategoria;
