import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import entryRoutes from './routes';
const renderRoutes = () =>
  entryRoutes.map((data, key) => (
    <Route key={key} {...data} />
  ));

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Good Books</h1>
        <nav>
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

        <Switch>{renderRoutes()}</Switch>
      </div>
    );
  }
}

export default App;
