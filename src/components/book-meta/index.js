import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../components/stars';
import './book-meta.css';
class BookMeta extends React.Component {
  static Title = ({ title }) => <h1>{title}</h1>;
  static SubTitle = ({ subtitle }) => (
    <h3 className="book-meta__subtitle">{subtitle}</h3>
  );
  static Author = ({ author }) => <h3>{author}</h3>;

  static Rating = ({ bookId }) => <Stars bookId={bookId} />;

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

BookMeta.propTypes = {
  title: PropTypes.string,
  author: PropTypes.array,
  subjects: PropTypes.string,
};

export default BookMeta;
