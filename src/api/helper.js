import { getBook, getBookFullData } from './book';

export const getBookData = book => {
  return getBook(book).then(result =>
    Promise.resolve(result[book])
  );
};
export const getFullBookData = book => {
  return getBookFullData(book).then(result =>
    Promise.resolve(result[book])
  );
};
export const getBookSubjects = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.subjects)
  );
};
export const getBookAuthors = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.authors)
  );
};
