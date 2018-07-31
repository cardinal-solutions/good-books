import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
  };
  render() {
    return (
      // @todo break into it's own component
      <form role="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={event =>
            this.setState({ value: event.target.value })
          }
          placeholder="Search by ISBN, title, or author"
          style={{ width: '50%' }}
        />
      </form>
    );
  }
}

class SearchResults extends Component {
  render() {
    // @todo return list items from search results
    return <div>{this.props.searchResults}</div>;
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }
  handleSubmit = result => {
    this.setState({
      searchInput: result,
    });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <SearchResults searchResults={searchInput} />
      </div>
    );
  }
}

export default Search;
