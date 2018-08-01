import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
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
        <Header />

        <Switch>{renderRoutes()}</Switch>
      </div>
    );
  }
}

export default App;
