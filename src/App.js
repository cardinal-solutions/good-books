import React, { Component } from 'react';
import { getBookThumbnail } from './api/thumbnailApi';
import './App.css';

class App extends Component {
  renderThumbnails = book => {
    getBookThumbnail(book).then(result => {
      console.log('result: ', result);
    });
  };

  render() {
    const bookID = 'ISBN:0385472579';
    return (
      <div className="App">
        <h1>Hello World</h1>

        {this.renderThumbnails(bookID)}
      </div>
    );
  }
}

export default App;
