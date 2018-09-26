import { baseUrl, checkStatus } from './common';
export const getBook = bookid => {
  return fetch(
    `${baseUrl}/api/books?bibkeys=${bookid}&format=json&jscmd=data`
  ).then(checkStatus);
};
