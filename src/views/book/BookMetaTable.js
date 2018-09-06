import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  withTheme,
  withStyles,
} from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
  table: {
    marginTop: 48,
  },
});
const BookMetaTable = ({ book, classes }) => {
  return (
    <div>
      <Paper className={classes.paper}>
        <h1>{book.title}</h1>
        {book.authors[0].name}
      </Paper>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell>{book.authors[0].name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of Pages</TableCell>
            <TableCell>{book.number_of_pages}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Publish Date</TableCell>
            <TableCell>{book.publish_date}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default withTheme()(
  withStyles(styles)(BookMetaTable)
);
