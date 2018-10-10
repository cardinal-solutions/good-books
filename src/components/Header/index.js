import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../layout';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import logoBlack from '../../img/bg-logo.png';
import logoWhite from '../../img/logo-white.png';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      searchValue: '',
      showSearchInput: false,
      width: window.innerWidth,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = selection => {
    if (selection.constructor === String) {
      this.props.history.push(selection);
    }
    this.setState({ anchorEl: null });
  };

  handleChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const formatSearchString = this.state.searchValue.replace(
      / /g,
      '+'
    );
    this.props.history.push(
      `/search/${formatSearchString}`
    );
    this.setState({ searchValue: '' });
  };
  updateWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }
  renderSearch = () => {
    const { showSearchInput } = this.state;
    return (
      <form
        role="search"
        autoComplete="off"
        onSubmit={this.handleSubmit}>
        <Grid container alignItems="center" spacing={16}>
          <Grid item onClick={() => this.toggleSearch()}>
            <Search />
          </Grid>
          {showSearchInput ? (
            <Grid item>
              <TextField
                id="Search"
                label="Search Book"
                value={this.state.searchValue}
                onChange={this.handleChange}
                margin="normal"
              />
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </form>
    );
  };

  toggleSearch = () => {
    this.setState({
      showSearchInput: !this.state.showSearchInput,
    });
  };

  render() {
    const isMobile = this.state.width < 960;
    return (
      <div>
        <Layout
          left={
            <Grid
              container
              spacing={0}
              alignItems="center"
              justify="space-around"
              className="header">
              <Grid item md={4}>
                <img
                  src={isMobile ? logoWhite : logoBlack}
                  alt="Good Books logo"
                />
              </Grid>
              <Grid item md={4}>
                <p className="header__text">Search</p>
              </Grid>
              <Grid item md={4}>
                <p className="header__text">Browse</p>
              </Grid>
            </Grid>
          }
          right={<div className="black-background" />}
        />
      </div>
    );
  }
}

export default withRouter(Header);
