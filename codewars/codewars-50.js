/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
let str = "abcdef";
let nums = [];
let odd = [];
let even = [];
function solution(str) {
  // let str = str.split("");
  for (let i = 0; i <= str.length - 1; i++) {
    if ((i % 2 === 0) === true) {
      odd.push(str[i]);
    }
    if ((i % 2 === 0) === false) {
      even.push(str[i]);
    }
  }

  console.log(odd);
  console.log(even);

  return str;
}
solution(str);
