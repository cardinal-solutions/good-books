export const getSearchResults = (type, input) => {
  const url = `http://openlibrary.org/search.json?${type}=${input}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.docs;
    });
};
