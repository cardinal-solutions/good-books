import React, { Component } from 'react';
import ListView from '../../components/list-view';
import { getSubjects } from '../../api/subjects';
class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    getSubjects(this.props.match.params.list).then(
      works => {
        this.setState({ works });
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    const list = this.props.match.params.list;
    if (list !== prevProps.list) {
      this.getData();
    }
  }

  render() {
    const { works } = this.state;
    return (
      <div>
        {works.map((work, idx) => {
          console.log(work.authors);
          return (
            <ListView
              title={work.title}
              author={work.authors.map(
                author => author.name
              )}
              coverType="olid"
              bookId={work.cover_edition_key}
              key={`work-${idx}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Browse;
