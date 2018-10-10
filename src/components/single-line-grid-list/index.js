import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
    position: 'relative',
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
        cols={5.5}
        spacing={24}
        cellHeight={294}>
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
              style={{ height: '200' }}
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
