export const getSubjects = subject => {
  const url = `http://openlibrary.org/subjects/${subject}.json?details=true`;
  return fetch(url, {
    mode: 'cors',
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.works;
    });
};
