import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
    this.clear();

    const searchInput = this.changeStr(this.state.value);
    getSearchResults(searchInput).then(results => {
      this.setResults(results);
    });
  };

  clear = () => {
    this.setState({ value: '' });
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
      //   <form role="search" onSubmit={this.handleSubmit}>
      //     <input
      //       type="text"
      //       value={this.state.value}
      //       onChange={this.handleChange}
      //       placeholder="Search by ISBN, title, or author"
      //       style={{ width: '50%' }}
      //     />
      //   </form>
      <form
        role="search"
        onSubmit={this.handleSubmit}
        style={{ margin: '5% 0' }}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item lg={12}>
            <TextField
              id="input-with-icon-grid"
              label="Search Books..."
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default SearchBar;
