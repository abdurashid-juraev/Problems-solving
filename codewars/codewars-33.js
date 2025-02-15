/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
*/
function replace(s) {
  if (s === "") return s;
  return s.replace(/[aeiou]/gi, "!");
}
console.log(replace("aaaaaas "));
