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

export const getBookData = book => {
  return getBook(book).then(result =>
    Promise.resolve(result[book])
  );
};

export const getBookBibKey = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.bib_key)
  );
};

export const getBookPreview = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.preview)
  );
};

export const getBookThumbnailUrl = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.thumbnail_url)
  );
};

export const getBookPreviewUrl = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.preview_url)
  );
};

export const getBookInfoUrl = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.info_url)
  );
};

/* @TODO integrate async data with componentWillMount
and in result promise returns setState value

  export const parseBook = book => {
    getBookInfoUrl(book).then(result => {
      console.log(result);
    });
  };

*/
