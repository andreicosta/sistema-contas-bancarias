const constants = {
  serverUrl: 'http://localhost:3000',
};

const request = (url, method, data) => {
  const req = {
    method,
    mode: 'cors',
  };

  const headers = {};

  if (method === 'POST') {
    req.body = JSON.stringify(data || {});
    headers['Content-Type'] = 'application/json';
  }

  req.headers = headers;

  return fetch(`${constants.serverUrl}/${url}`, req)
    .then((resp) => resp.json());
};

const get = (url) => request(url, 'GET', null);
const post = (url, data) => request(url, 'POST', data);
const put = (url) => request(url, 'PUT', null);

export {
  get,
  post,
  put,
};
