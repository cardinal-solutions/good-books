import React from 'react';
import PropTypes from 'prop-types';

const style = {
  container: { width: '300px' },
  img: { minWidth: '300px', maxWidth: '100%' },
};
const Thumbnail = ({ coverType, bookId }) => (
  <div style={style.container}>
    <img
      style={style.img}
      src={`http://covers.openlibrary.org/b/${coverType}/${bookId}-L.jpg`}
    />
  </div>
);

export default Thumbnail;
