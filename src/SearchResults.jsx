import { connect } from 'react-redux';
import React, { Component } from 'react';
import items from './items.js';

class UnconnectedSearchResults extends Component {
  render = () => {
    const results = items.filter((item) => {
      return (
        item.name.includes(this.props.query) &&
        item.price >= this.props.minPrice &&
        item.price <= this.props.maxPrice &&
        item.inStock === this.props.inStock
      );
    });
    return (
      <div>
        {results.map((r) => {
          return <div>{r.name}</div>;
        })}
      </div>
    );
  };
}
const mapStateToProps = (st) => {
  return {
    query: st.searchQuery,
    minPrice: st.min,
    maxPrice: st.max,
    inStock: st.inStock,
  };
};
const SearchResults = connect(mapStateToProps)(UnconnectedSearchResults);
export default SearchResults;
/* meta
    ({
        text: {
            1: `We need to import the connect module so that our component can read data from the store.`,
            2: `In the virtual DOM, we see that the UnconnectedSearchResults nodes will receive
        a query prop from connect by looking at the mapStateToProps function. The st parameter
         of that function represents the state of the store. The value of that prop depends on the
          the searchQuery property of the state of the store.`,
            3: `This component has no state and no other methods than render`,
            4: `We only want items who name matches the search query so we use
            filter to select only those items. The query prop is populated by
            the mapStateToProps function below and it refers to the searchQuery property of the
            state of the store. We are currently no filtering by price. You'll need to
            do that in the exercises `,
            5: `Finally we display the items. We use map to convert the array of items to an array
            of react elements. Each item has a name property (see data.js)`

        }
    })
    */
