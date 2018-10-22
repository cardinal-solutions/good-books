import React from 'react';
import { getAuthorsList } from '../../api/search';
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
    // Typical usage (don't forget to compare props):
    if (this.props.author !== prevProps.author) {
      this.setAuthors(this.props.author);
    }
  }
  render() {
    const works = this.state.works;
    return (
      <div>
        {works ? (
          <ul>
            {works.map((book, idx) => (
              <li key={idx}>{book.title_suggest}</li>
            ))}
            <li>see more...</li>
          </ul>
        ) : null}
        <ul />
      </div>
    );
  }
}

export default AuthorsList;
