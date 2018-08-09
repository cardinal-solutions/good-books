import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  getBookThumbnailUrl,
  getBookPreviewUrl,
  getFullBookData,
} from '../../api/helper';

import './Book.css';
import { getBookFullData } from '../../api/book';

// const bookID = 'ISBN:0385472579';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: {},
      title: '',
      book: {},
    };

    const bookid = this.props.match.params.bookid;
    getBookPreviewUrl(bookid).then(title => {
      // console.log('title: ', title);
      this.setState({ title });
    });

    // getBook = () => {
    //   return fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0385472579&format=json&jscmd=data')
    //     .then(response => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then(error => {
    //       console.log(error);
    //     });
    // };
  }

  componentDidMount = () => {
    const { match } = this.props;
    const bookid = match.params.bookid;

    getFullBookData(bookid).then(result => {
      console.log('getBook: ', result);
    });
  };

  // callApi = () => {
  //   getFullBookData(this.props.match.params.bookid).then(result => {
  //     console.log(result);
  //   })
  // }

  render() {
    const { match } = this.props;
    const { cover, title } = this.state;
    return (
      <div className="Book">
        <strong>Book</strong>
        {/* {console.log(match.params)} */}
        {match.params.bookid}

        {title}
        {/*
        {this.callApi()} */}

        {/* {getBookThumbnailUrl(bookID)} */}
      </div>
    );
  }
}

Book.propTypes = {
  match: PropTypes.object,
};

Book.defaultProps = {
  match: {},
};

export default withRouter(Book);
