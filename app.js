const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const input = document.querySelector("input");
const arr = [];

function fn(x) {
  x = input.value;
  if (x !== "") {
    arr.push(x);
    let words = x.split("");
    console.log(words.length);
    text.innerText = words;
  }
  input.value = "";
}
btn.addEventListener("click", () => {
  fn(input);
});
