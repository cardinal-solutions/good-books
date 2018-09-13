export const baseUrl = 'https://openlibrary.org';

export const checkStatus = response => {
  if (!response.ok) {
    throw Error('error');
  }
  return response.json();
};
