import React from 'react';

class Pesquisa extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="query-input" />
        <button type="submit" data-testid="query-button" id="xpto">
          Submit
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default Pesquisa;
