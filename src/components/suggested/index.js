import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import SingleLineGridList from '../../components/single-line-grid-list';

import { getSubjects } from '../../api/subjects';

import './SuggestedBooks.css';

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
      books: null,
    };
  }

  componentDidUpdate = prevProps => {
    if (this.props.topic !== prevProps.topic) {
      getSubjects(this.props.topic).then(data =>
        this.setBooks(data)
      );
    }
  };

  componentDidMount() {
    if (this.props.topic) {
      getSubjects(this.props.topic).then(books => {
        this.setBooks(books);
      });
    }
  }

  setBooks = list => {
    this.setState({
      books: list,
    });
  };

  render() {
    const { classes, topic, sidePanel } = this.props;
    const { books } = this.state;
    return (
      <div className={`Suggested ${classes.root}`}>
        {books && (
          <div>
            <h2>
              Suggested books {topic && `in ${topic}.`}
            </h2>
            <SingleLineGridList
              tileData={books}
              side={sidePanel}
            />
          </div>
        )}
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
