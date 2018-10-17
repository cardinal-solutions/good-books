import React from 'react';
import Grid from '@material-ui/core/Grid';
import { number, element } from 'prop-types';
class Layout extends React.Component {
  static propTypes = {
    mdLeft: number,
    mdRight: number,
    left: element,
    right: element,
  };
  static defaultProps = {
    mdLeft: 6,
    mdRight: 6,
  };
  render() {
    return (
      <Grid container wrap={this.props.wrap}>
        <Grid item xs={12} md={this.props.mdLeft}>
          {this.props.left}
        </Grid>
        <Grid item xs={12} md={this.props.mdRight}>
          {this.props.right}
        </Grid>
      </Grid>
    );
  }
}

export default Layout;
