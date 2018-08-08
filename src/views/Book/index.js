import React from 'react';
import { withRouter } from 'react-router-dom';
// import { getBookThumbnailUrl } from '../../api/helper';

import './Book.css';

// const bookID = 'ISBN:0385472579';

const Book = ({ match }) => (
  <div className="Book">
    <strong>Book</strong>
    {console.log(match.params)}
    {match.params.bookid}

    {/* {getBookThumbnailUrl(bookID)} */}
  </div>
);

export default withRouter(Book);
