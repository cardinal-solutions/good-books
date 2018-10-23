import React from 'react';
import { Typography } from '@material-ui/core';

import './favorites-btn.css';
export default () => {
  return (
    <div className="favorites-btn">
      <Typography
        variant="subheading"
        style={{ margin: '5% 0', fontWeight: '500' }}>
        Add to your collection
      </Typography>
    </div>
  );
};
