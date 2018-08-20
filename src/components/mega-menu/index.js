import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { genres } from './genres';
class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = selection => {
    this.props.history.push(`/browse/${selection}`);
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button onClick={this.handleClick}>
          {this.props.menuTitle}
          <ArrowDropDown />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          {genres.map((genre, idx) => (
            <MenuItem
              onClick={() => this.handleClose(genre)}
              key={`genre-${idx}`}>
              {genre}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withRouter(MegaMenu);
