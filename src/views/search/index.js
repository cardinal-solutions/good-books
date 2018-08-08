import React, { Component } from 'react';
import SearchBar from '../../components/search-bar';
// @todo: searchresults needs to be it's own <ListView /> component
const SearchResults = ({ results }) => {
  return results.map((item, idx) => (
    <div>{item.title_suggest}</div>
  ));
};
// @todo:  Need to programmatically route to Search from any url
class Search extends Component {
  state = {
    searchResults: [],
  };

  handleSubmit = results => {
    this.setState({ searchResults: results });
  };

  render() {
    const { searchResults } = this.state;
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <SearchResults results={searchResults} />
      </div>
    );
  }
}

export default Search;
