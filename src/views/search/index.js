import React, { Component } from 'react';
import SearchBar from '../../components/search-bar';
import ListView from '../../components/list-view';
// @todo: searchresults needs to be it's own <ListView /> component
const SearchResults = ({ results }) => {
  return results
    .filter(
      result => result.cover_edition_key !== undefined
    )
    .map((book, idx) => (
      <ListView
        title={book.title_suggest}
        author={book.author_name}
        coverType="olid"
        bookId={book.cover_edition_key}
      />
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
    const hasResults = searchResults.length === 0;

    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        {hasResults ? (
          'No Results'
        ) : (
          <SearchResults results={searchResults} />
        )}
      </div>
    );
  }
}

export default Search;
