/*
Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

Examples
['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']
*/
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
