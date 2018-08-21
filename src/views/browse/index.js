import React, { Component } from 'react';
import BrowseGrid from '../../components/browse-grid';
import { getSubjects } from '../../api/subjects';
class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreList: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    getSubjects(this.props.match.params.list).then(
      genre => {
        this.setState({ genreList: genre });
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    const list = this.props.match.params.list;
    if (
      prevProps.match.params &&
      list !== prevProps.match.params.list
    ) {
      this.getData();
    }
  }

  render() {
    const { genreList } = this.state;
    return (
      <div>
        <BrowseGrid tileData={genreList} />
      </div>
    );
  }
}

export default Browse;
