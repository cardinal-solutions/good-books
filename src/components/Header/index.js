import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
  },
  menuButton: {},
};

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      searchValue: '',
      // showSearchInput: false,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log('searchValue: ', this.state.searchValue);
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
    return (
      <form role="search" onSubmit={this.handleSubmit}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Search Books..."
              value={this.state.searchValue}
              onChange={this.handleChange}
            />
          </Grid>
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
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}>
              Good Books
            </Typography>
            <MegaMenu menuTitle="Browse" />
            <Button
              component={Link}
              to="/books"
              variant="outlined"
              color="inherit">
              Browse
            </Button>
            <Button
              component={Link}
              to="/search"
              color="inherit">
              Search
            </Button>

            {this.renderSearch()}

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
                  key={option}
                  selected={option === 'Pyxis'}
                  onClick={this.handleClose}>
                  {option}
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
