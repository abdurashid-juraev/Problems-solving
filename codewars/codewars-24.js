/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/
function sum(...arg) {
  let sum = [];
  for (let i = 0; i < arg.length; i++) {
    sum.push(arg[i]);
  }
  let total = sum.reduce((a, b) => a + b, 0);
  console.log(total);
  return total;
}
sum(1, 2, 3);
