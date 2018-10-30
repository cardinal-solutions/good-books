import { baseUrl, checkStatus } from './common';

export const getSearchResults = (input, type = 'q') => {
  // @TODO why doesnt defsult param work?
  const url = `${baseUrl}/search.json?${type}=${input}`;
  // todo: extract json() and error handking to helper function
  return fetch(url)
    .then(checkStatus)
    .then(data => {
      return data.docs;
    });
};
export function getAuthorsList(input, type) {
  return new Promise((resolve, reject) => {
    getSearchResults(input, type).then(results => {
      if (results <= 4) {
        resolve(results);
      } else resolve(results.slice(1, 4));
      reject(new Error('something bad happened :('));
    });
  });
}
