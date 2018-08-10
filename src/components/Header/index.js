import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
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
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button
              component={Link}
              to="/books"
              variant="outlined"
              color="inherit">
              Books
            </Button>
            <Button
              component={Link}
              to="/search"
              color="inherit">
              Search
            </Button>
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

export default withTheme()(withStyles(styles)(Header));
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
