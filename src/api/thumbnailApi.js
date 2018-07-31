import 'whatwg-fetch';

export function getThumbnails() {
  return get(
    'https://openlibrary.org/api/books?bibkeys=ISBN:0385472579&format=json'
  );
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
