//function strStr(haystack, needle) {
//  return haystack.indexOf(needle);
//}
//console.log(strStr("sadbutsad", "sado"));

//function fn(n) {
//  return Math.floor(Math.random() * 20);
//}
//console.log(fn(20));

//function fn(n, d) {
//  return n.toFixed(d);
//}
//console.log(fn(2.1111, 2));
/*
8. Most Frequent Array Item

Write a JavaScript program to find the most frequent item in an array.

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Sample Output : a ( 5 times )
*/

//let str = "aks";

//function palindrom(str) {
//  return str === str.split("").reverse().join("") ? true : false;
//}
//console.log(palindrom(str));

/*
I - 1
V - 5
X - 10
L - 50
C - 100
D - 500
M - 1000
*/

//console.log(romanAlphabet("I"));

//function romanAlphabet(str) {
//  let total = 0;
//  for (let i = 0; i < str.length; i++) {
//    let current = romanToNum(str[i]);
//    let next = romanToNum(str[i + 1]);

//    if (next > current) {
//      total = total + next - current;
//      i++;
//    } else {
//      total = total + current;
//    }
//  }
//  return total;
//}
//console.log(romanAlphabet("L"));

//function romanToNum(char) {
//  switch (char) {
//    case "I":
//      return 1;
//    case "V":
//      return 5;
//    case "X":
//      return 10;
//    case "L":
//      return 50;
//    case "C":
//      return 100;
//    case "D":
//      return 500;
//    case "M":
//      return 100;
//    default:
//      return 0;
//  }
//}
