import React from 'react';
import Grid from '@material-ui/core/Grid';
class Layout extends React.Component {
  render() {
    return (
      <Grid container wrap={this.props.wrap}>
        <Grid item xs={12} md={6}>
          {this.props.left}
        </Grid>
        <Grid item xs={12} md={6}>
          {this.props.right}
        </Grid>
      </Grid>
    );
  }
}

export default Layout;
