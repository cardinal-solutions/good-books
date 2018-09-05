import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import placeholder from '../../img/placeholder.png';
const style = {
  container: { width: '100%' },
  img: { minWidth: '100%', maxWidth: '100%' },
};

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = bookId => {
    this.props.history.push(`/book/OLID:${bookId}`);
  };

  render() {
    const { coverType, bookId, alt } = this.props;
    const src =
      bookId === undefined || null
        ? placeholder
        : `http://covers.openlibrary.org/b/${coverType}/${bookId}-L.jpg`;
    return (
      <div style={style.container}>
        <img
          style={style.img}
          src={src}
          alt={alt}
          onClick={() => this.onClick(bookId)}
        />
      </div>
    );
  }
}

Thumbnail.propTypes = {
  coverId: PropTypes.string,
  bookId: PropTypes.string,
  alt: PropTypes.string,
};

export default withRouter(Thumbnail);
