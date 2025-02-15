/*
For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000
*/
function manipulate(num) {
  let numStr = num.toString();
  let middle = numStr.length / 2;
  let newStr = numStr.slice(0, middle);
  for (let i = middle; i < numStr.length; i++) {
    newStr += "0";
  }
  return +newStr;
}
console.log(manipulate(2837743));
