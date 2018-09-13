import React, { Component } from 'react';
import BrowseGrid from '../../components/browse-grid';
import { getSubjects } from '../../api/subjects';
import { Typography } from '../../../node_modules/@material-ui/core';

import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { changeStr } from '../../utils/change-str';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  pageTitle: {
    padding: 24,
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreList: [],
      filterNullThumbnails: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    getSubjects(this.props.match.params.list)
      .then(genre => {
        this.setState({ genreList: genre });
      })
      .catch(error => {
        console.log(error);
      });
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

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { genreList, filterNullThumbnails } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.pageTitle}>
          <Typography variant="display1" gutterBottom>
            {`Top Titles in ${changeStr(
              this.props.match.params.list
            )}`}
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.filterNullThumbnails}
                  onChange={this.handleChange(
                    'filterNullThumbnails'
                  )}
                  value="filterNullThumbnails"
                />
              }
              label="Remove Blank Covers"
            />
          </FormGroup>
        </div>

        {filterNullThumbnails ? (
          <BrowseGrid
            tileData={genreList.filter(
              genre => genre.cover_id !== null
            )}
          />
        ) : (
          <BrowseGrid tileData={genreList} />
        )}
      </div>
    );
  }
}

export default withTheme()(withStyles(styles)(Browse));
