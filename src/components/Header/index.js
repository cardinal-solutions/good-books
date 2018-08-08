import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchBar from '../search-bar/index';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = results => {
    console.log(results);
  };
  render() {
    return (
      <nav className="Header">
        <span className="Header__title">Good Books</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <SearchBar handleSubmit={this.handleSubmit} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
