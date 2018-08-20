import React, { Component } from 'react';
class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const list = this.props.match.params.list;
    return <div>{list}</div>;
  }
}

export default Browse;
