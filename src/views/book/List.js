import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { getSearchResults } from '../../api/search';
import ListView from '../../components/list-view';

import './Book.css';
import SponsoredBook from '../../components/sponsored-book';
import SuggestedBooks from '../../components/suggested';
import { random, genres } from '../../utils/genre-list';
// const bookID = 'ISBN:0385472579';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  table: {
    marginTop: 48,
  },
});

const NoResults = () => (
  <div>
    <Typography variant="display3">
      No Results Found
    </Typography>
    <Divider />
    <Typography variant="body2">
      Looking for a book?
    </Typography>
    <ul>
      <li>
        <Typography variant="body2">
          Search by both title, author, and double-check the
          spelling.
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          Try searching by ISBN.
        </Typography>
      </li>
    </ul>
  </div>
);

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      haveResults: true,
    };

    const searchString = props.match.params.searchquery;
    getSearchResults(searchString).then(results => {
      this.setState({
        searchResults: results,
      });
    });
  }

  componentDidUpdate(nextProps) {
    if (
      nextProps.match.params.searchquery !==
      this.props.match.params.searchquery
    ) {
      const searchString = this.props.match.params
        .searchquery;
      getSearchResults(searchString).then(results => {
        this.setState(
          {
            searchResults: results,
          },
          () => this.setState({ haveResults: true })
        );
      });
    }
  }

  render() {
    const SearchResults = () => {
      const results = this.state.searchResults;
      return results
        .filter(
          result => result.cover_edition_key !== undefined
        )
        .map((book, id) => (
          <ListView
            title={book.title_suggest}
            author={book.author_name}
            coverType="olid"
            bookId={book.cover_edition_key}
            key={`book-${id}`}
          />
        ));
    };
    const { classes } = this.props;
    const { haveResults, searchResults } = this.state;

    return (
      <div className={classes.root}>
        {haveResults && searchResults.length !== 0 ? (
          <Grid container spacing={0}>
            <Grid item md={7} xs={12}>
              <SearchResults />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              style={{ marginTop: `3%` }}>
              <SponsoredBook />
              <SuggestedBooks
                topic={random(genres)}
                sidePanel
              />
            </Grid>
          </Grid>
        ) : (
          <NoResults />
        )}
      </div>
    );
  }
}

BookList.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

BookList.defaultProps = {
  match: {},
};

export default withTheme()(
  withStyles(styles)(withRouter(BookList))
);
