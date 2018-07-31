import { getBookThumbnail } from './thumbnailApi';

export const renderThumbnail = book => {
  getBookThumbnail(book).then(result => {
    console.log('result: ', result);
  });
};
