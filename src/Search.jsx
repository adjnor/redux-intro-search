import { connect } from 'react-redux';
import React, { Component } from 'react';
class UnconnectedSearch extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  handleQuery = (evt) => {
    this.props.dispatch({ type: 'query', q: evt.target.value });
  };
  handleMinimumPrice = (evt) => {
    const price = parseInt(evt.target.value) || 0;
    this.props.dispatch({ type: 'minimum-price', price: price });
  };
  handleMaximumPrice = (evt) => {
    const price = parseInt(evt.target.value) || 0;
    this.props.dispatch({ type: 'maximum-price', price: price });
  };
  handleInStock = (evt) => {
    this.props.dispatch({ type: 'in-stock', inStock: evt.target.checked });
  };
  handleClear = () => {
    this.props.dispatch({ type: 'clear' });
  };
  handleAdvancedSearch = () => {
    this.props.dispatch({ type: 'advanced-search' });
  };
  render() {
    console.log('HEY', this.props);
    return (
      <div>
        <label>
          Search query
          <input
            type="text"
            onChange={this.handleQuery}
            value={this.props.query}
          />
        </label>

        <button onClick={this.handleAdvancedSearch}>Advanced search</button>

        {this.props.advancedSearch && (
          <>
            <label>
              Minimum price
              <input
                type="text"
                onChange={this.handleMinimumPrice}
                value={this.props.minPrice}
              />
            </label>

            <label>
              Maximum price
              <input
                type="text"
                onChange={this.handleMaximumPrice}
                value={this.props.maxPrice}
              />
            </label>
          </>
        )}

        <label>
          In stock
          <input
            type="checkbox"
            onChange={this.handleInStock}
            checked={this.props.inStock}
          />
        </label>

        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
const mapStateToProps = (st) => {
  return {
    query: st.searchQuery,
    minPrice: st.min,
    maxPrice: st.max,
    inStock: st.inStock,
    advancedSearch: st.advancedSearch,
  };
};
let Search = connect(mapStateToProps)(UnconnectedSearch);
export default Search;
