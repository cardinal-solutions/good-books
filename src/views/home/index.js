import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

class Home extends Component {
  state = {};

  render() {
    return <div style={styles.root}>Home</div>;
  }
}

export default withStyles(styles)(Home);
