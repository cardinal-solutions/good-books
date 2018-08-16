import React from 'react';

const style = {
  container: { width: '300px' },
  img: { minWidth: '300px', maxWidth: '100%' },
};
const Thumbnail = ({ alt, coverType, bookId }) => (
  <div style={style.container}>
    <img
      style={style.img}
      src={`http://covers.openlibrary.org/b/${coverType}/${bookId}-L.jpg`}
      alt={alt}
    />
  </div>
);

export default Thumbnail;
