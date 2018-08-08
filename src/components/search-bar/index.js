import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getSearchResults } from '../../api/search';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showResults: false,
      searchResults: [],
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchInput = this.changeStr(this.state.value);

    getSearchResults('title', searchInput).then(results => {
      this.setResults(results);
    });

    if (this.state.searchResults === 0) {
      getSearchResults('author', searchInput).then(
        results => {
          this.setResults(results);
        }
      );
    }
    console.log(this.state.searchResults);
  };

  setResults = results => {
    this.setState({
      searchResults: results,
    });
  };

  changeStr = input => {
    return input.replace(/ /g, '+');
  };

  render() {
    return (
      <form role="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search by ISBN, title, or author"
          style={{ width: '50%' }}
        />
      </form>
    );
  }
}

export default SearchBar;
