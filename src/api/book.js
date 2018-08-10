const baseUrl = 'https://openlibrary.org/api/';

export const getBook = bookID => {
  return get(`books?bibkeys=${bookID}&format=json`);
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

// export const getBookFullData = bookID => {
//   return fetch(`${baseUrl}books?bibkeys=${bookID}&format=json&jscmd=data`)
//     .then(response => {
//       console.log(response)
//       return response.json();
//     })
//     .then(error => {
//       console.log(error);
//     });
// };
