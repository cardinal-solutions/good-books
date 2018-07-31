import 'whatwg-fetch';

const baseUrl = 'https://openlibrary.org/api/';

export function getBookThumbnail(bookID) {
  return get(`books?bibkeys=${bookID}&format=json`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
