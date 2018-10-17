import React, { Component } from 'react';
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
  static defaultProps = {
    topic: '',
  };
  state = {
    books: null,
  };

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
                margin: '2% 0',
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

export default withTheme()(
  withStyles(styles)(withRouter(SuggestedBooks))
);
