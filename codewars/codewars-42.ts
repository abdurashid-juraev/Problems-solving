/*

Convert boolean values to strings 'Yes' or 'No'.

*/
const boolToWord = (bool: boolean): string => {
  if (bool === true) {
    return "Yes";
  }
  return "No";
};
