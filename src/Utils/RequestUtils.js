export const request = (url, method, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body
    })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      resolve(responseData);
    })
    .catch((error) => {
      reject(error);
    });
  });
};
