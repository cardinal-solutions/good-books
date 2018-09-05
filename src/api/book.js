const baseUrl = 'https://openlibrary.org/api/';

export const getBook = bookid => {
  return fetch(
    `https://openlibrary.org/api/books?bibkeys=${bookid}&format=json&jscmd=data`
  ).then(response => {
    return response.json();
  });
};

export const getBookFullData = bookID => {
  return get(
    `books?bibkeys=${bookID}&format=json&jscmd=data`
  );
};

const get = url => {
  return fetch(baseUrl + url).then(onSuccess, onError);
};

const onSuccess = response => {
  return response.json();
};

const onError = error => {
  console.log(error); // eslint-disable-line no-console
};
