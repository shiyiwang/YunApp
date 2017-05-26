import MD5 from 'crypto-js/md5'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export const request = (url, method, body) => {
  const yuniposign = "test"
  const yunipotime = Math.floor(new Date().getTime() / 1000)
  const yunipoauth = MD5(yuniposign + yunipotime + JSON.stringify(body)).toString()

  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'yuniposign': yuniposign,
        'yunipotime': yunipotime,
        'yunipoauth': yunipoauth
      },
      body: JSON.stringify(
        body
      )
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => resolve(data))
    .catch((error) => reject(error));
  });
};
