import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import SingleLineGridList from '../../components/single-line-grid-list';

import { getSubjects } from '../../api/subjects';
import {
  getBookAuthors,
  getBookSubjects,
} from '../../api/helper';

import './SuggestedBooks.css';

// const bookID = 'ISBN:0385472579';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 64,
  },
});

class SuggestedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: '',
      subjects: [],
      books: [],
    };
  }

  componentDidUpdate(nextProps) {
    if (
      nextProps.match.params.bookid !==
      this.props.match.params.bookid
    ) {
      this.getBookData();
    }
  }

  componentDidMount = () => {
    this.getBookData();
  };

  getBookData() {
    const { match, topic } = this.props;

    if (topic !== '') {
      getSubjects(topic).then(books => {
        this.setState({ books });
      });
    } else {
      const bookid = match.params.bookid;

      getBookAuthors(bookid).then(authors => {
        const authorsList = authors.map(author => {
          return (
            <a href={author.url} key={author.name}>
              {author.name}
            </a>
          );
        });

        this.setState({ authors: authorsList });
      });

      getBookSubjects(bookid).then(subjects => {
        this.setState({
          subjects,
        });

        getSubjects(
          subjects[0].name.split(' ').join('_')
        ).then(books => {
          this.setState({ books });
        });
      });
    }
  }

  render() {
    const { classes, topic, sidePanel } = this.props;
    const { books } = this.state;

    return (
      <div className={`Suggested ${classes.root}`}>
        <h2>Suggested books {topic && `in ${topic}.`}</h2>
        <SingleLineGridList
          tileData={books}
          side={sidePanel}
        />
      </div>
    );
  }
}

SuggestedBooks.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object.isRequired,
  topic: PropTypes.string,
  sidePanel: PropTypes.bool,
};

SuggestedBooks.defaultProps = {
  match: {},
  topic: '',
  sidePanel: false,
};

export default withTheme()(
  withStyles(styles)(withRouter(SuggestedBooks))
);
