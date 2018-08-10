import React from 'react';
import BookMeta from '../../components/book-meta';
import Thumbnail from '../../components/Thumbnail';
const ListView = ({ title, author, bookId, coverType }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '10%',
      marginBottom: '10%',
    }}>
    <Thumbnail
      custom
      coverType={coverType}
      bookId={bookId}
    />
    <BookMeta title={title} author={author}>
      <BookMeta.Title />
      <BookMeta.Author />
    </BookMeta>
  </div>
);

// @TODO add
export default ListView;
