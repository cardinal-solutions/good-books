import React from 'react';

import { Typography } from '@material-ui/core';
const BookMetaTabs = props => {
  return (
    <div>
      <Typography
        variant="subheading"
        style={{ margin: '5% 0', fontWeight: '500' }}>
        {props.bookTitle} Additional Information
      </Typography>
    </div>
  );
};

export default BookMetaTabs;
