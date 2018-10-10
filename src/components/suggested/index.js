import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { getSubjects } from '../../api/subjects';
import { changeStr } from '../../utils/change-str';

import './SuggestedBooks.css';
import SingleLineGridList from '../../components/single-line-grid-list';

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

  handleClick = () => {
    this.props.history.push(`/search/${this.props.topic}`);
  };
  render() {
    const { topic } = this.props;
    const { books } = this.state;
    return (
      <div className="suggested-books">
        {books && (
          <div>
            <Typography
              style={{
                cursor: 'pointer',
                marginBottom: '2%',
                fontWeight: '500',
              }}
              onClick={this.handleClick}
              variant="subheading">
              {`More books about ${changeStr(topic)}`}
            </Typography>
            <SingleLineGridList tileData={books} />
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
