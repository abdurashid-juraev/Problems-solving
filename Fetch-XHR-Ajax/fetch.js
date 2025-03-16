const list = document.querySelector("#list");
let url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

let promise = fetch(url);

promise.then((response) => response.json()).then((data) => rendered(data));

function rendered(data) {
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    list.appendChild(li);
    li.innerHTML = `
    <div>
      <div>Id: ${data[i].id}</div>
      <h1>Title: ${data[i].title}</h1>
      <p>${data[i].body}</p>
    </div>
    `;
  }
}
