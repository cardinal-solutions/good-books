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
import CardMedia from '@material-ui/core/CardMedia';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {
  getBookAuthors,
  getBookClassifications,
  getBookCover,
  getBookKey,
  getBookNumberOfPages,
  getBookPublishDate,
  getBookPublishPlaces,
  getBookTitle,
  getFullBookData,
} from '../../api/helper';

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
      authors: [],
      classifications: {},
      cover: '/empty.jpg',
      key: '',
      pages: 0,
      publishDate: '',
      publishPlaces: '',
      title: '',
      book: {},
    };

    const bookid = this.props.match.params.bookid;
    getBookTitle(bookid).then(title => {
      this.setState({ title });
    });

    getBookAuthors(bookid).then(authors => {
      this.setState({ authors: authors[0] });
    });
  }

  componentDidMount = () => {
    const { match } = this.props;
    const bookid = match.params.bookid;

    getFullBookData(bookid).then(book => {
      this.setState({
        book,
        key: book.key,
      });

      console.log(book);
    });

    getBookClassifications(bookid).then(result => {
      this.setState({
        classifications: {
          dewey: result.dewey_decimal_class[0],
          lc: result.lc_classifications[0],
        },
      });
    });

    getBookCover(bookid).then(cover => {
      this.setState({ cover: cover.large });
    });

    getBookNumberOfPages(bookid).then(pages => {
      this.setState({ pages });
    });

    getBookPublishDate(bookid).then(publishDate => {
      this.setState({ publishDate });
    });

    getBookPublishPlaces(bookid).then(places => {
      let publishPlaces = places.map(place => {
        return place['name'];
      });

      publishPlaces = publishPlaces.join(', ');
      this.setState({ publishPlaces });
    });
  };

  render() {
    const { classes, match } = this.props;
    const {
      authors,
      classifications,
      cover,
      key,
      pages,
      publishDate,
      publishPlaces,
      title,
      book,
    } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={cover}
                title={title}
              />
              <CardContent>
                <strong>{match.params.bookid}</strong>
                {key}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <h1>{title}</h1>
              {book.subtitle}

              {/* {getBookThumbnailUrl(bookID)} */}
            </Paper>

            <Table className={classes.table}>
              {/* <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead> */}

              <TableBody>
                <TableRow>
                  <TableCell>Author</TableCell>
                  <TableCell>{authors.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Book Key</TableCell>
                  <TableCell>{key}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Classifications: Dewey Decimal
                  </TableCell>
                  <TableCell>
                    {classifications.dewey}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Classifications: LC</TableCell>
                  <TableCell>
                    {classifications.lc}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number of Pages</TableCell>
                  <TableCell>{pages}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Publish Date</TableCell>
                  <TableCell>{publishDate}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Publish Place(s)</TableCell>
                  <TableCell>{publishPlaces}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
