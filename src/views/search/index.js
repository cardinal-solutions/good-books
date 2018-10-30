import React, { Component } from 'react';
import SearchBar from '../../components/search-bar';
import ListView from '../../components/list-view';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// @todo: searchresults needs to be it's own <ListView /> component

const NoResults = () => (
  <div>
    <Typography variant="display3">
      No Results Found
    </Typography>
    <Divider />
    <Typography variant="body2">
      Looking for a book?
    </Typography>
    <ul>
      <li>
        <Typography variant="body2">
          Search by both title, author, and double-check the
          spelling.
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          Try searching by ISBN.
        </Typography>
      </li>
    </ul>
  </div>
);

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
        key={`book-${idx}`}
      />
    ));
};

class Search extends Component {
  state = {
    searchResults: [],
    noResults: false,
  };

  handleSubmit = results => {
    this.setState(
      () => ({ searchResults: results }),
      () => this.showResults()
    );
  };

  showResults = () => {
    this.setState({
      noResults: true,
    });
  };

  render() {
    const { searchResults, noResults } = this.state;
    const hasResults = searchResults.length === 0;
    const displayResult = noResults ? (
      <NoResults />
    ) : (
      'Search for books'
    );

    const styles = {
      container: {
        maxWidth: '900px',
        margin: '5% auto',
      },
    };

    return (
      <div style={styles.container}>
        <SearchBar handleSubmit={this.handleSubmit} />
        {hasResults ? (
          <div style={styles.container}>
            {displayResult}
          </div>
        ) : (
          <SearchResults results={searchResults} />
        )}
      </div>
    );
  }
}

export default Search;
