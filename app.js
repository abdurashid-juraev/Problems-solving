//function strStr(haystack, needle) {
//  return haystack.indexOf(needle);
//}
//console.log(strStr("sadbutsad", "sado"));

function singleNumber(nums) {
  let result = [0];
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}
let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
