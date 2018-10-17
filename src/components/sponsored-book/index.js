import React from 'react';
import Typography from '@material-ui/core/Typography';
import Thumbnail from '../Thumbnail';
import './sponsored-book.css';

const SponsoredBook = () => (
  <div className="sponsored-book">
    <Typography
      variant="subheading"
      style={{ margin: '5% 0', fontWeight: '500' }}>
      Sponsored Book
    </Typography>
    <div className="sponsored-book__thumbnail">
      <Thumbnail
        custom
        coverType="isbn"
        bookId="0451526538"
        alt="Featured book of the day"
      />
    </div>
  </div>
);

export default SponsoredBook;
