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
    console.log(this.props.match.params.bookid);
    this.setBook();
  };

  setBook() {
    const id = this.props.match.params.bookid;
    console.log(id);
    getBook(id).then(book => {
      const thisBook = Object.keys(book)[0];
      this.setState(
        () => ({ book: book[thisBook] }),
        () => this.setSubjects(this.state.book)
      );
    });
  }
  setSubjects = test => {
    const arr = [];
    Object.values(test.subjects).forEach(element =>
      arr.push(element.name)
    );
    this.setState({
      topic: arr[0],
    });
  };

  render() {
    const { classes } = this.props;
    const { book, topic } = this.state;
    const id = this.props.match.params.bookid;

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
                    bookId={id.split(':').pop()}
                    alt={`Cover for ${book.title}`}
                  />
                  <CardContent>
                    <strong>{id}</strong>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={8}>
                <BookMetaTable book={book} />
              </Grid>
            </Grid>
            <SuggestedBooks topic={topic} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
};

Book.defaultProps = {};

export default withTheme()(
  withStyles(styles)(withRouter(Book))
);
