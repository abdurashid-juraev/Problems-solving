//function strStr(haystack, needle) {
//  return haystack.indexOf(needle);
//}
//console.log(strStr("sadbutsad", "sado"));

let nums = [1, 2, 4, 6];

function fn(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}
console.log(fn(nums, 3));
