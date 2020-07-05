const BASE_URL = "http://127.0.0.1:3000";
const getJSON = function (url, method, data) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open(method, BASE_URL + url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send(JSON.stringify(data));
  });
  return promise;
};

export default getJSON;
