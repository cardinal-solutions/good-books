import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { genres } from '../../genre-list';

import './mega-menu.css';

class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selection: '',
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = selection => {
    if (selection.constructor === String) {
      this.props.history.push(`/browse/${selection}`);
    }
    this.setState({ anchorEl: null });
  };

  changeStrCase = string =>
    string.charAt(0).toUpperCase() + string.slice(1);
  render() {
    const { anchorEl } = this.state;

    return (
      <div className="MegaMenu">
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
              {this.changeStrCase(genre)}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withRouter(MegaMenu);
