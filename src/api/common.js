export const baseUrl = 'https://openlibrary.org';

export const checkStatus = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};
