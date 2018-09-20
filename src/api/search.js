import { baseUrl, checkStatus } from './common';

export const getSearchResults = input => {
  const url = `${baseUrl}/search.json?q=${input}`;
  // todo: extract json() and error handking to helper function
  return fetch(url)
    .then(checkStatus)
    .then(data => {
      return data.docs;
    });
};
