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
async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
  console.log(millis);
  return millis;
}
sleep(100);
