const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}

sendRequest("GET", requestUrl).then((data) => {
  // data is the response
  for (let i = 0; i < data.length; i++) {
    getData(data[i]);
  }
});

function getData(data) {
  let li = document.createElement("li");
  document.getElementById("list").appendChild(li);
  li.innerHTML = `
    <div>name: ${data.name}</div>
    <div>email: ${data.email}</div>
    <div>phone: ${data.phone}</div>
    <div>username: ${data.username}</div>
    <div>website: ${data.website}</div>
    <div>address: ${data.address.city}</div>
    <div>street: ${data.address.street}</div>
  `;
}

/*
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onload = () => {
  for (let i = 0; i < JSON.parse(xhr.response).length; i++) {
    getData(JSON.parse(xhr.response)[i]);
    // console.log(JSON.parse(xhr.response));
  }
};
xhr.send();
function getData(data) {
  let li = document.createElement("li");
  document.getElementById("list").appendChild(li);
  li.innerHTML = `
    <div>name: ${data.name}</div>
    <div>email: ${data.email}</div>
    <div>phone: ${n.phone}</div>
    <div>username: ${data.username}</div>
    <div>website: ${data.website}</div>
    <div>address: ${data.address.city}</div>
    <div>street: ${data.address.street}</div>
  `;
}
*/
