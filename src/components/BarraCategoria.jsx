import React from 'react';
import PropTypes from 'prop-types';
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
    const { searchCategory } = this.props;
    return (
      <div>
        { selecionarCategorias.map((element) => (
          <button
            type="button"
            key={ element.id }
            data-testid="category"
            value={ element.id }
            onClick={ () => searchCategory(element.id) }
          >
            { element.name }
          </button>)) }
      </div>
    );
  }
}

BarraCategoria.propTypes = {
  searchCategory: PropTypes.func.isRequired,
};

export default BarraCategoria;
