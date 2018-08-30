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
// import CardMedia from '@material-ui/core/CardMedia';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SuggestedBooks from '../../components/suggested';
import Thumbnail from '../../components/Thumbnail';

import { getFullBookData } from '../../api/helper';

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
      authors: '',
      classifications: {
        dewey: '',
        lc: '',
      },
      cover: '/empty.jpg',
      key: '',
      pages: 0,
      publishDate: '',
      publishPlaces: '',
      title: '',
      book: {},
      subjects: [],
    };
  }

  componentDidUpdate(nextProps) {
    console.log('params: ', nextProps.match.params.bookid);
    console.log('params: ', this.props.match.params);
    if (
      nextProps.match.params.bookid !==
      this.props.match.params.bookid
    ) {
      this.getBook();
    }
  }

  componentDidMount = () => {
    this.getBook();
  };

  getBook() {
    const { match } = this.props;
    const bookid = match.params.bookid;

    getFullBookData(bookid).then(book => {
      const publishPlaces =
        book.publish_places &&
        book.publish_places.map(place => {
          return place['name'];
        });

      const subjects =
        book.subjects &&
        book.subjects.map(subject => {
          return subject.name;
        });

      const authors = book.authors.map(author => {
        return (
          <a href={author.url} key={author.name}>
            {author.name}
          </a>
        );
      });

      this.setState({
        book,
        authors,
        key: book.key,
        classifications: {
          dewey:
            book.classifications &&
            book.classifications.dewey_decimal_class
              ? book.classifications.dewey_decimal_class[0]
              : 'not found',
          lc:
            book.classifications &&
            book.classifications.lc_classifications
              ? book.classifications.lc_classifications[0]
              : 'not found',
        },
        cover: book.cover.large,
        pages: book.number_of_pages,
        publishDate: book.publish_date,
        publishPlaces:
          publishPlaces && publishPlaces.join(', '),
        title: book.title,
        subjects: subjects && subjects.join(', '),
      });

      console.log(book);
    });
  }

  render() {
    const { classes, match } = this.props;
    const {
      authors,
      classifications,
      // cover,
      key,
      pages,
      publishDate,
      publishPlaces,
      title,
      book,
      subjects,
    } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Card className={classes.card}>
              {/* <CardMedia
                className={classes.media}
                image={cover}
                title={title}
              /> */}
              <Thumbnail
                custom
                coverType="OLID"
                bookId={match.params.bookid
                  .split(':')
                  .pop()}
                alt={`Cover for ${title}`}
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
                  <TableCell>{authors}</TableCell>
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
                <TableRow>
                  <TableCell>Subject(s)</TableCell>
                  <TableCell>{subjects}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>

        <SuggestedBooks />
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
