import React from 'react';

const style = {
  container: { width: '100%' },
  img: { minWidth: '100%', maxWidth: '100%' },
};
const Thumbnail = ({ alt, coverType, bookId, onClick }) => (
  <div style={style.container}>
    <img
      style={style.img}
      src={`http://covers.openlibrary.org/b/${coverType}/${bookId}-L.jpg`}
      alt={alt}
      onClick={onClick}
    />
  </div>
);

export default Thumbnail;
