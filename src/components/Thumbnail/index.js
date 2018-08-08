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
    return (
      <div className="Thumbnail">
        <img src={thumbnailUrl} />
      </div>
    );
  }
}

Thumbnail.propTypes = {
  size: PropTypes.string,
  cover: PropTypes.object,
};

Thumbnail.defaultProps = {
  size: '',
  cover: {},
};

export default Thumbnail;
