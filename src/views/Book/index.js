import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SuggestedBooks from '../../components/suggested';
import ListView from '../../components/list-view';
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
    const id = this.props.match.params.bookid;

    getBook(id).then(book => {
      const thisBook = Object.keys(book)[0];
      this.setState(
        () => ({ book: book[thisBook] }),
        () => this.setSubjects(this.state.book)
      );
    });
  }

  setSubjects = book => {
    const arr = [];
    Object.values(book.subjects).forEach(element =>
      arr.push(element.name)
    );
    this.setState({
      topic: arr[Math.floor(Math.random() * arr.length)],
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
            <Grid container spacing={0}>
              <Grid item xs={9}>
                <ListView
                  title={book.title}
                  author={
                    book.authors
                      ? book.authors.map(
                          author => author.name
                        )
                      : null
                  }
                  coverType="olid"
                  bookId={id.split(':').pop()}
                  key={book.title}
                />
              </Grid>

              <Grid item xs={3}>
                <SuggestedBooks sidePanel topic={topic} />
              </Grid>
            </Grid>
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
