/*
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/
// function countStrings(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase() && typeof str[i] === typeof 'number') {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countStrings("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
let str = "ABC123!@€£#$aa%^&*()_-+=}{[]|':;?/>.<,~";

let str2 = str.split("").filter((char) => char >= "a" && char <= "z").length;

console.log(str2);
