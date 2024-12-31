const requestUrl = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();

xhr.open("GET", requestUrl);

xhr.onload = () => {
  for (let i = 0; i < JSON.parse(xhr.response).length; i++) {
    getData(JSON.parse(xhr.response)[i]);
    // console.log(JSON.parse(xhr.response));
  }
};
xhr.send();
function getData(n) {
  let li = document.createElement("li");
  document.getElementById("list").appendChild(li);

  li.innerHTML = `
    <div>name: ${n.name}</div>
    <div>email: ${n.email}</div>
    <div>phone: ${n.phone}</div>
    <div>username: ${n.username}</div>
    <div>website: ${n.website}</div>
    <div>address: ${n.address.city}</div>
    <div>street: ${n.address.street}</div>
  `;
}
