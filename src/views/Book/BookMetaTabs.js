import React from 'react';

import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

const styles = theme => ({});
const BookMetaTabs = () => {
  return (
    <div>
      <hr />
      MetaTabs here!
    </div>
  );
};

export default withTheme()(
  withStyles(styles)(BookMetaTabs)
);
