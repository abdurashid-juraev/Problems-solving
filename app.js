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
//sleep(100);
//let createCounter = function (init) {
//  let countValue = init;

//  function increment() {
//    return ++countValue;
//  }
//  function decrement() {
//    return --countValue;
//  }
//  fun

//console.log(chunk(arr, size));
//let obj = {
//  name: "Ali",
//  address: {
//    city: "Tashkent",
//    location: {
//      lat: 41,
//      long: 69,
//    },
//  },
//};

//function flattenObject(obj, objKey = "", result = {}) {
//  for (let key in obj) {
//    const newKey = objKey ? `${objKey}.${key}` : key;

//    if (
//      typeof obj[key] === "object" &&
//      obj[key] !== null &&
//      !Array.isArray(obj[key])
//    ) {
//      flattenObject(obj[key], newKey, result);
//    } else {
//      result[newKey] = obj[key];
//    }
//  }

//  return result;
//}

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
//console.log(flattenObject(obj));

//let arr = [0, 10, 20, 30];

//function func(arr) {
//  let newArr = [];

//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > 10) {
//      newArr.push(arr[i]);
//    }
//    if (arr[i] === 0) {
//      newArr.push(arr[0]);
//    }
//    if (arr[i] < 0) {
//      newArr.push(arr[i] + 1);
//    }
//  }
//  console.log(newArr);

//  return newArr;
//}
//func(arr);

//let createHelloWorld = function (x, {}) {
//  return function (...args) {
//    return "Hello World";
//  };
//};
//let fn = createHelloWorld(asa, 2121);
//fn();

//function fn(n) {
//  if (n % 15 === 0) {
//    return "FizzBuzz";
//  }
//  if (n % 3 === 0) {
//    return "Fizz";
//  }
//  if (n % 5 === 0) {
//    return "Buzz";
//  }
//  return n.toString();
//}
//console.log(fn(15));
let s = "A man, a plan, a canal: Panama";
var isPalindrome = function (s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    str = s[i].join();
    console.log(str);
  }
};
isPalindrome(s);
