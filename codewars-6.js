/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function OddOrEven(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(OddOrEven(5));
