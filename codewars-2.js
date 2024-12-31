/*
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
*/

function noBoringZeros(n) {
  if (n % 10 === 0 && n !== 0) {
    return noBoringZeros(n / 10);
  }
  console.log(n);

  return n;
}
noBoringZeros(10050100);
