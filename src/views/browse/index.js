import React, { Component } from 'react';
import BrowseGrid from '../../components/browse-grid';
import { getSubjects } from '../../api/subjects';
import { Typography } from '../../../node_modules/@material-ui/core';
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

    const genre = string =>
      string.charAt(0).toUpperCase() + string.slice(1);
    return (
      <div style={{ marginTop: '3.5em' }}>
        <Typography
          style={{ marginLeft: '10%' }}
          variant="display2"
          gutterBottom>{`Browse ${genre(
          this.props.match.params.list
        )} Books`}</Typography>
        <BrowseGrid tileData={genreList} />
      </div>
    );
  }
}

export default Browse;
