import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookMeta from '../../components/book-meta';
import Thumbnail from '../../components/Thumbnail';

const ListView = ({ title, author, bookId, coverType }) => (
  <Grid container spacing={24} wrap="wrap-reverse">
    <Grid item xs={12} sm={6}>
      <Thumbnail
        custom
        coverType={coverType}
        bookId={bookId}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <BookMeta title={title} author={author}>
        <BookMeta.Title />
        <BookMeta.Author />
      </BookMeta>
    </Grid>
  </Grid>
);

// @TODO add
export default ListView;
