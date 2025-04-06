/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
Note: Zero should be left as it is.
*/
function noBoringZeros(n: number): number {
  // while (n % 10 === 0 && n !== 0) {
  //   n = n / 10;
  // }
  // console.log(n);

  // return n;

  if (n % 10 === 0 && n !== 0) {
    noBoringZeros(n / 10);
  }
  console.log(n);

  return n;
}
noBoringZeros(100000);
