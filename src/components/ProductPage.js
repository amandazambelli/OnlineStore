import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true },
      async () => {
        const data = await getProduct(id);
        this.setState({ product: data, loading: false });
      });
  }

  renderAttributes = (product) => {
    if (Object.keys(product).length !== 0) {
      return (
        product.attributes
          .map((attribute) => (
            <p key={ attribute.id }>
              {`${attribute.name}: ${attribute.value_name}`}
            </p>
          ))
      );
    }
  }

  render() {
    const { product, loading } = this.state;
    return (
      <div>
        { loading && <h2>Loading</h2> }
        <p data-testid="product-detail-name">
          { product.title }
        </p>
        <p>{ product.price }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>Especificação técnicas</p>
        { this.renderAttributes(product) }
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default ProductPage;
