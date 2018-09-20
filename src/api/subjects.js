import { baseUrl, checkStatus } from './common';
export const getSubjects = subject => {
  subject = subject
    .split(' ')
    .join('_')
    .toLowerCase();
  const url = `${baseUrl}/subjects/${subject}.json?details=true`;
  return fetch(url, {
    mode: 'cors',
  })
    .then(checkStatus)
    .then(data => {
      return data.works;
    })
    .catch(error => {
      throw Error(error);
    });
};
