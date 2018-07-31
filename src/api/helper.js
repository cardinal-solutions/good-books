import { getBookThumbnail } from './thumbnailApi';

/* @TODO delete reference / mock data later
  import { renderThumbnail } from './api/helper';
  const bookID = 'ISBN:0385472579';
  {renderThumbnail(bookID)}
*/

export const renderThumbnail = book => {
  getBookThumbnail(book).then(result => {
    console.log('result: ', result);
  });
};
