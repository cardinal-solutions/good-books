import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// import SuggestedBooks from '../../components/suggested';
import Thumbnail from '../../components/Thumbnail';
import { getBook } from '../../api/book';
// import { getFullBookData } from '../../api/helper';

import './Book.css';

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

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
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

    return (
      <div className={classes.root}>
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
            <Paper className={classes.paper}>
              <h1>{book.title}</h1>
              {book.subtitle}
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
