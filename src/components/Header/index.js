import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';

import MegaMenu from '../mega-menu';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';

import './Header.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuButton: {},
  search: {
    cursor: 'pointer',
  },
};

const options = [
  {
    title: 'Advance Search',
    url: '/search',
  },
];

const ITEM_HEIGHT = 48;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      searchValue: '',
      showSearchInput: false,
    };
  }

  handleClick = event => {
    console.log(event.currentTarget);
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

  renderSearch = () => {
    const { showSearchInput } = this.state;
    return (
      <form
        role="search"
        autoComplete="off"
        onSubmit={this.handleSubmit}>
        <Grid container alignItems="center" spacing={16}>
          <Grid
            item
            onClick={() => this.toggleSearch()}
            className={this.props.classes.search}>
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
    const { classes } = this.props;
    const { anchorEl } = this.state;
    //   @todo: <Searchbar /> and its state needs to be lifted here to manage programmtic routing to /search

    return (
      <div className={classes.root}>
        <AppBar position="static" className="Header">
          <Toolbar>
            <div className={classes.flex}>
              <Link to="/">
                <div className="logo">GB</div>
              </Link>
              {this.renderSearch()}
            </div>

            {/* <Button
              component={Link}
              to="/search"
              color="inherit">
              Search
            </Button> */}

            <MegaMenu menuTitle="Browse" />

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="More"
              aria-owns={anchorEl ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200,
                },
              }}>
              {options.map(option => (
                <MenuItem
                  key={option.title}
                  onClick={() =>
                    this.handleClose(option.url)
                  }>
                  {option.title}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withTheme()(
  withStyles(styles)(withRouter(Header))
);
/* notes:
  export default withTheme()(withStyles(styles)(Modal));

  export default withStyles(styles, { withTheme: true })(Modal);

  or

  import { compose } from 'recompose';

  export default compose(
    withTheme(),
    withStyles(styles)
  )(Modal);
*/
