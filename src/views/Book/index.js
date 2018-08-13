import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
  getBookThumbnailUrl,
  getBookPreviewUrl,
  getBookTitle,
  getFullBookData,
} from '../../api/helper';

import './Book.css';
import { getBookFullData } from '../../api/book';

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
});

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: {},
      title: '',
      book: {},
    };

    const bookid = this.props.match.params.bookid;
    getBookTitle(bookid).then(title => {
      // console.log('title: ', title);
      this.setState({ title });
    });

    // getBook = () => {
    //   return fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0385472579&format=json&jscmd=data')
    //     .then(response => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then(error => {
    //       console.log(error);
    //     });
    // };
  }

  componentDidMount = () => {
    const { match } = this.props;
    const bookid = match.params.bookid;

    getFullBookData(bookid).then(result => {
      console.log('getBook: ', result);
    });
  };

  // callApi = () => {
  //   getFullBookData(this.props.match.params.bookid).then(result => {
  //     console.log(result);
  //   })
  // }

  render() {
    const { classes, match } = this.props;
    const { cover, title } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <strong>{match.params.bookid}</strong>

              {/* {getBookThumbnailUrl(bookID)} */}
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <strong>{title}</strong>

              {/* {getBookThumbnailUrl(bookID)} */}
            </Paper>
          </Grid>
        </Grid>
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
