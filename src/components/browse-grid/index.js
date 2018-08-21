import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Thumbnail from '../../components/Thumbnail';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '80%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
const BrowseGrid = ({ listTitle, tileData, ...props }) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cellHeight="auto"
        cols={4}>
        {tileData.map(data => (
          <GridListTile key={data.title}>
            <Thumbnail
              custom
              coverType="OLID"
              bookId={data.cover_edition_key}
              alt={`Cover for ${data.title}`}
            />
            <GridListTileBar
              title={data.title}
              subtitle={
                <span>
                  by:{' '}
                  {data.authors.map(author => author.name)}
                </span>
              }
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(BrowseGrid);
