import React from 'react';
import Stars from '../../components/stars';
import { string, array } from 'prop-types';
import './book-meta.css';
class BookMeta extends React.Component {
  static propTypes = {
    title: string,
    author: string || array, // TODO: fix this
    bookId: string,
    subtitle: string,
  };
  static Title = ({ title }) => <h1>{title}</h1>;
  static SubTitle = ({ subtitle }) => (
    <h3 className="book-meta__subtitle">{subtitle}</h3>
  );
  static Author = ({ author }) => (
    <h3 className="book-meta__author">{author}</h3>
  );

  static Rating = ({ bookId }) => (
    <Stars bookId={bookId} className="book-meta__rating" />
  );

  render() {
    return (
      <div className="book-meta">
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            title: this.props.title,
            author: this.props.author,
            bookId: this.props.bookId,
            subtitle: this.props.subtitle,
          })
        )}
      </div>
    );
  }
}

export default BookMeta;
