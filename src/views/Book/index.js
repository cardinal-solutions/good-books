import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import BookMetaTable from './BookMetaTable';

import SuggestedBooks from '../../components/suggested';
import Thumbnail from '../../components/Thumbnail';
import { getBook } from '../../api/book';
import Stars from '../../components/stars';

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

const MAX_RATING = 5;

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      error: false,
      localBook: props.match.params.bookid,
      localRating: MAX_RATING,
    };
  }

  componentDidUpdate(nextProps) {
    if (
      nextProps.match.params.bookid !==
      this.props.match.params.bookid
    ) {
      const id = this.props.match.params.bookid;
      if (!localStorage.hasOwnProperty(id)) {
        this.setState({ localRating: MAX_RATING });
      }

      this.setBook();
    }
  }

  componentDidMount = () => {
    this.setBook();
  };

  setBook() {
    const id = this.props.match.params.bookid;

    this.updateStateWithLocalStorage();

    getBook(id).then(book => {
      const thisBook = Object.keys(book)[0];
      this.setState(
        () => ({ book: book[thisBook] }),
        () => this.setSubjects(this.state.book)
      );
    });
  }

  updateStateWithLocalStorage() {
    const id = this.props.match.params.bookid;

    if (localStorage.hasOwnProperty(id)) {
      const localRating = localStorage.getItem(id);
      this.setState({ localRating });
    } else {
      localStorage.setItem(id, MAX_RATING);
    }
  }

  setSubjects = test => {
    const arr = [];
    try {
      Object.values(test.subjects).forEach(element =>
        arr.push(element.name)
      );
      this.setState({
        topic: arr[Math.floor(Math.random() * arr.length)],
      });
    } catch (error) {
      this.setState(state => ({
        error: !state.error,
      }));
    }
  };

  render() {
    const { classes } = this.props;
    const { book, topic, localRating } = this.state;
    const id = this.props.match.params.bookid;

    if (this.state.error) {
      return (
        <div>
          <Typography variant="display3">
            {`Sorry, we couldn't find this book 🙁.`}
          </Typography>
          <Divider />
        </div>
      );
    }
    const rating = {
      size: 40,
      count: MAX_RATING,
      value: localRating,
      onChange: newRating => {
        console.log(`New rating is ${newRating}`);
        this.setState({ localRating: newRating }, () =>
          localStorage.setItem(id, newRating)
        );
      },
    };

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
                <Stars {...rating} />
                {`${localRating} / ${MAX_RATING}`}
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
