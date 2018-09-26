import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Stars from '../../components/stars';

class BookMeta extends React.Component {
  static Title = ({ title }) => (
    <Typography variant="title">{title}</Typography>
  );
  static Author = ({ author }) => (
    <Typography variant="subheading">{author}</Typography>
  );
  static Rating = ({ bookId }) => <Stars bookId={bookId} />;

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            title: this.props.title,
            author: this.props.author,
            bookId: this.props.bookId,
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
