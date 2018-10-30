import React from 'react';
import {
  List,
  ListItem,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { getAuthorsList } from '../../api/search';
import './authors-list.css';

const styles = {
  root: {
    paddingLeft: 0,
    paddingTop: 0,
  },
};
class AuthorsList extends React.Component {
  state = {
    works: [],
  };
  componentDidMount() {
    this.setAuthors(this.props.author);
  }
  setAuthors = author => {
    getAuthorsList(author, 'author').then(works => {
      this.setState({ works });
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.author !== prevProps.author) {
      this.setAuthors(this.props.author);
    }
  }
  render() {
    const works = this.state.works;
    const { classes, author } = this.props;
    return (
      <div>
        <Typography
          variant="subheading"
          style={{ margin: '5% 0', fontWeight: '500' }}>
          More books from {author}
        </Typography>
        <List dense>
          {works.map((item, idx) => (
            <ListItem key={idx} className={classes.root}>
              <Link
                to={`/book/OLID:${item.cover_edition_key}`}
                className="authors-list__item">
                {item.title_suggest}
              </Link>
            </ListItem>
          ))}
          <ListItem className={classes.root}>
            <Link
              to={`/search/${author}`}
              className="authors-list__item">
              ...see more
            </Link>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AuthorsList));
