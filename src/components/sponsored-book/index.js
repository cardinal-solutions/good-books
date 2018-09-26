import React from 'react';
import Typography from '@material-ui/core/Typography';
import Thumbnail from '../Thumbnail';
class SponsoredBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Typography variant="subheading">
          Featured Book
        </Typography>
        <div style={{ maxWidth: `75%` }}>
          <Thumbnail
            custom
            coverType="isbn"
            bookId="0451526538"
            alt="Featured book of the day"
          />
        </div>
      </div>
    );
  }
}

export default SponsoredBook;
