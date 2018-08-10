import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailUrl: '',
    };
  }

  render() {
    const { thumbnailUrl } = this.state;
    const { coverType, bookId } = this.props;
    return (
      <div className="Thumbnail">
        {this.props.custom ? (
          <img
            src={`http://covers.openlibrary.org/b/${coverType}/${bookId}-L.jpg`}
          />
        ) : (
          <img src={thumbnailUrl} />
        )}
      </div>
    );
  }
}

Thumbnail.propTypes = {
  size: PropTypes.string,
  cover: PropTypes.object,
  custom: PropTypes.bool,
  type: PropTypes.string,
  bookId: PropTypes.string,
};

Thumbnail.defaultProps = {
  size: '',
  cover: {},
  custom: false,
  type: '',
  bookId: '',
};

export default Thumbnail;
