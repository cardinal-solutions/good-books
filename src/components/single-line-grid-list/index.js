import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  title: { color: theme.palette.primary },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const SingleLineGridList = ({ tileData, ...props }) => {
  const { classes, history } = props;

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cellHeight="auto"
        cols={8.5}>
        {tileData.map(data => (
          <GridListTile
            key={data.title}
            onClick={() =>
              history.push(
                `/book/OLID:${data.cover_edition_key}`
              )
            }>
            <Thumbnail
              custom
              coverType="OLID"
              bookId={data.cover_edition_key}
              alt={`Cover for ${data.title}`}
            />
            <GridListTileBar
              title={data.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon
                    className={classes.title}
                  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(
  withRouter(SingleLineGridList)
);
