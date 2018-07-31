import React, { Component } from 'react';
import { getThumbnails } from './api/thumbnailApi';
import './App.css';

class App extends Component {
  renderThumbnails = () => {
    getThumbnails().then(result => {
      console.log('result: ', result);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>

        {this.renderThumbnails()}
      </div>
    );
  }
}

export default App;
