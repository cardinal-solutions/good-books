import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    return (
      <div style={style.container}>
        <img
          style={style.img}
          src={`http://covers.openlibrary.org/b/${coverType}/${bookId}-L.jpg`}
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
