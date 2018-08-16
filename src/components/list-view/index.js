import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookMeta from '../../components/book-meta';
import Thumbnail from '../../components/Thumbnail';

const styles = {
  container: {
    marginTop: '5%',
    marginBottom: '5%',
  },
};
const ListView = ({ title, author, bookId, coverType }) => (
  <div style={styles.container}>
    <Grid container spacing={24} wrap="wrap-reverse">
      <Grid item xs={12} sm={4}>
        <Thumbnail
          custom
          coverType={coverType}
          bookId={bookId}
          alt={`Cover for ${title}`}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <BookMeta title={title} author={author}>
          <BookMeta.Title />
          <BookMeta.Author />
        </BookMeta>
      </Grid>
    </Grid>
  </div>
);

// @TODO add
export default ListView;
