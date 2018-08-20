export const getSearchResults = input => {
  const url = `http://openlibrary.org/search.json?q=${input}`;
  // todo: extract json() and error handking to helper function
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.docs;
    });
};
