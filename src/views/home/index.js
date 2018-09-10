import React, { Component } from 'react';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SuggestedBooks from '../../components/suggested';
import { genres } from '../../genre-list';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  hero: {
    height: 350,
    flexGrow: 1,
    backgroundColor: theme.palette.grey[300],
  },
  body: {
    padding: 24,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const random = items =>
      items[Math.floor(Math.random() * items.length)];

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item className={classes.hero} />
        </Grid>
        <Grid
          container
          spacing={24}
          className={classes.body}>
          <Grid item xs={8}>
            <SuggestedBooks topic={random(genres)} />
            <SuggestedBooks topic={random(genres)} />
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <SuggestedBooks
                topic={random(genres)}
                sidePanel
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withTheme()(withStyles(styles)(Home));
