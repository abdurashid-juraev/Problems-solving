let arr = ["JO", "DOE", "NAME"];
function capMe(names) {
  let str = [];
  for (let i = 0; i < names.length; i++) {
    if (
      names[i] === names[i].toLowerCase() ||
      names[i] === names[i].toUpperCase()
    )
      str.push(
        names[i].charAt(0).toUpperCase() + names[i].substring(1).toLowerCase()
      );
  }
  return str;
}
console.log(capMe(arr));
