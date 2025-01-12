// Find the Difference in Age between Oldest and Youngest Family Members
const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function differenceInAges(ages) {
  let min = ages[0];
  let max = ages[0];

  for (let i = 1; i < ages.length; i++) {
    if (ages[i] < min) {
      min = ages[i];
    }

    if (ages[i] > max) max = ages[i];
  }
  console.log(`min: ${min}, max: ${max} difference: ${max - min}`);

  return [min, max, max - min];
}
differenceInAges(ages);
