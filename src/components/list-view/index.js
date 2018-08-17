import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BookMeta from '../../components/book-meta';
import Thumbnail from '../../components/Thumbnail';

const styles = {
  container: {
    marginTop: '5%',
    marginBottom: '5%',
  },
};

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { coverType, bookId, title, author } = this.props;
    return (
      <div style={styles.container}>
        <Grid container spacing={24} wrap="wrap-reverse">
          <Grid item xs={12} sm={4}>
            <Thumbnail
              custom
              coverType={coverType}
              bookId={bookId}
              alt={`Cover for ${title}`}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BookMeta title={title} author={author}>
              <BookMeta.Title />
              <BookMeta.Author />
            </BookMeta>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// const ListView = ({ title, author, bookId, coverType }) => (
//   <div style={styles.container}>
//     <Grid container spacing={24} wrap="wrap-reverse">
//       <Grid item xs={12} sm={4}>
//         <Thumbnail
//           custom
//           coverType={coverType}
//           bookId={bookId}
//           alt={`Cover for ${title}`}
//           onClick={this.handleClick}
//         />
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <BookMeta title={title} author={author}>
//           <BookMeta.Title />
//           <BookMeta.Author />
//         </BookMeta>
//       </Grid>
//     </Grid>
//   </div>
// );

// @TODO add
export default ListView;
