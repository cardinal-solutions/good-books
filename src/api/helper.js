import { getBook } from './book';

/* @TODO delete reference / mock data later
  import { renderThumbnail } from './api/helper';
  const bookID = 'ISBN:0385472579';
  {renderThumbnail(bookID)}
*/

/* Base Parse Book Data Example for any micro functions
export const parseBook = book => {
  getBook(book).then(result => {
    console.log('result: ', result[book]);
  });
};
*/

let bookData;

function getBookData(book) {
  return getBook(book).then(result => {
    // console.log(result[book]);
    return result[book];
  });
}

export const parseBook = book => {
  bookData = getBookData(book);
  console.log('data: ', bookData);
};
