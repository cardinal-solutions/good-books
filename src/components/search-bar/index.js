import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getSearchResults } from '../../api/search';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
    // @todo: need to also be able to search by author and isbn
    getSearchResults('title', searchInput).then(results => {
      this.setResults(results);
    });
  };

  setResults = results => {
    this.setState(
      ({ searchResults }) => ({ searchResults: results }),
      () =>
        this.props.handleSubmit(this.state.searchResults)
    );
  };

  changeStr = input => {
    return input.replace(/ /g, '+');
  };

  render() {
    return (
      // @todo: input needs to be own component to be used as filter in the future //
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
