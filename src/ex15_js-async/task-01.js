const fetchLike = (method, URL, params) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL);
    if (params) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.onload = () => {
      const res = xhr.response.json();
      if (xhr.status >= 400) {
        reject(res);
      } else {
        resolve(res);
      }
    };
    xhr.onerror = () => {
      reject(new Error('something bad happened'));
    };
    xhr.send(JSON.stringify(params));
  });
  return promise;
};

module.exports = fetchLike;
