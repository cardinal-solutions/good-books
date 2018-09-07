import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BookMetaTable from './BookMetaTable';

import SuggestedBooks from '../../components/suggested';
import Thumbnail from '../../components/Thumbnail';
import { getBook } from '../../api/book';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
});

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
  }

  componentDidUpdate(nextProps) {
    if (
      nextProps.match.params.bookid !==
      this.props.match.params.bookid
    ) {
      this.setBook();
    }
  }

  componentDidMount = () => {
    this.setBook();
  };

  setBook() {
    const { match } = this.props;
    const bookid = match.params.bookid;
    getBook(bookid).then(book => {
      const thisBook = Object.keys(book)[0];
      this.setState({
        book: book[thisBook],
      });
    });
  }

  render() {
    const { classes, match } = this.props;
    const { book } = this.state;
    console.log(book);
    return (
      <div className={classes.root}>
        {book ? (
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <Thumbnail
                    custom
                    coverType="OLID"
                    bookId={match.params.bookid
                      .split(':')
                      .pop()}
                    alt={`Cover for ${book.title}`}
                  />
                  <CardContent>
                    <strong>{match.params.bookid}</strong>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={8}>
                <BookMetaTable book={book} />
              </Grid>
            </Grid>
            <SuggestedBooks />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

Book.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

Book.defaultProps = {
  match: {},
};

export default withTheme()(
  withStyles(styles)(withRouter(Book))
);
