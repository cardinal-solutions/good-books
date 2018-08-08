import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //   @todo: <Searchbar /> and its state needs to be lifted here to manage programmtic routing to /search
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
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
