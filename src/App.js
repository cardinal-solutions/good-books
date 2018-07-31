import React, { Component } from 'react';
import { parseBook } from './api/helper';
import './App.css';

class App extends Component {
  render() {
    /* @TODO delete mock bookID data later */
    const bookID = 'ISBN:0385472579';

    return (
      <div className="App">
        <h1>Hello World</h1>

        {parseBook(bookID)}
      </div>
    );
  }
}

export default App;
