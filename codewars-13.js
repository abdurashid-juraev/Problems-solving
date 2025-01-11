/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function solution(str) {
  const str2 = [];

  for (let i = 0; i < str.length; i++) {
    str2[i] = str[str.length - 1 - i];
  }

  return str2.join("");
}
