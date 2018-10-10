import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import BookMeta from '../../components/book-meta';
import Thumbnail from '../../components/Thumbnail';

const styles = {
  container: {
    marginTop: '5%',
    marginBottom: '5%',
  },
};

const ListView = ({ coverType, bookId, title, author }) => (
  <div style={styles.container}>
    <Grid container spacing={24} wrap="wrap-reverse">
      <Grid item xs={12} sm={6}>
        <BookMeta
          title={title}
          author={author}
          bookId={bookId}>
          <BookMeta.Title />
          <BookMeta.Author />
          <BookMeta.Rating />
        </BookMeta>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Thumbnail
          custom
          coverType={coverType}
          bookId={bookId}
          alt={`Cover for ${title}`}
        />
      </Grid>
    </Grid>
  </div>
);

ListView.propTypes = {
  coverType: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ListView;
