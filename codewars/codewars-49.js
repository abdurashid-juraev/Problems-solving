/*

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

let arr = [1, 2, 3, 4, 5];
function noOdds(values) {
  // Return all non-odd values
  let even = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      even.push(values[i]);
    }
  }
  console.log(even);

  return even;
}
noOdds(arr);
