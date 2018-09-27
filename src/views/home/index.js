import React, { Component } from 'react';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SuggestedBooks from '../../components/suggested';
import SponsoredBook from '../../components/sponsored-book';
import { genres, random } from '../../utils/genre-list';

random(genres);
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
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item className={classes.hero} />
        </Grid>
        <Grid
          container
          spacing={24}
          className={classes.body}>
          <Grid item md={8} xs={12}>
            <SuggestedBooks topic={random(genres)} />
            <SuggestedBooks topic={random(genres)} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper className={classes.paper}>
              <SponsoredBook />
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
