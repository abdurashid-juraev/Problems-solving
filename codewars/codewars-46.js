/*
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"
*/

function longestWord(stringOfWords) {
  let words = stringOfWords.split(" ");
  let longWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (longWord.length <= words[i].length) {
      longWord = words[i];
    }
  }

  return longWord;
}
