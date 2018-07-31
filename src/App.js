import React, { Component } from 'react';
import { renderThumbnail } from './api/helper';
import './App.css';

class App extends Component {
  render() {
    const bookID = 'ISBN:0385472579';

    return (
      <div className="App">
        <h1>Hello World</h1>

        {renderThumbnail(bookID)}
      </div>
    );
  }
}

export default App;
