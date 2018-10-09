import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BookMeta from '../../components/book-meta';
import Thumbnail from '../../components/Thumbnail';
import Layout from '../../components/layout';
import SuggestedBooks from '../../components/suggested';
import { getBook } from '../../api/book';
import { random } from '../../utils/genre-list';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
  }

  componentDidUpdate(nextProps) {
    if (
      nextProps.match.params.bookid !==
      this.props.match.params.bookid
    ) {
      this.setBook();
    }
  }

  componentDidMount = () => {
    this.setBook();
  };

  setBook() {
    const id = this.props.match.params.bookid;

    getBook(id).then(book => {
      const thisBook = Object.keys(book)[0];
      this.setState(
        () => ({ book: book[thisBook] }),
        () => this.setSubjects(this.state.book)
      );
    });
  }

  setSubjects = book => {
    const arr = [];
    Object.values(book.subjects).forEach(element =>
      arr.push(element.name)
    );
    this.setState({
      topic: random(arr),
    });
  };

  render() {
    const { book, topic } = this.state;
    const id = this.props.match.params.bookid;
    return (
      <div className="book-view">
        {book ? (
          <div>
            <Layout
              wrap="wrap-reverse"
              left={
                <BookMeta
                  title={book.title}
                  author={
                    book.by_statement ||
                    book.authors.map(auth => auth.name)
                  }
                  bookId={book.bookId}
                  subtitle={book.subtitle}>
                  <BookMeta.Title />
                  <BookMeta.SubTitle />
                  <BookMeta.Author />
                  <BookMeta.Rating />
                </BookMeta>
              }
              right={
                <div className="book-view__thumbnail">
                  <Thumbnail
                    custom
                    coverType="OLID"
                    bookId={id.split(':').pop()}
                    alt={`Cover for ${book.title}`}
                    key={book.cover_edition_key}
                  />
                </div>
              }
            />
            <SuggestedBooks topic={topic} />;
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
};

Book.defaultProps = {};

export default withRouter(Book);
