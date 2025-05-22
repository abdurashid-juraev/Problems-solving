function fn(n) {
  let arr = n.toString().split("");
  let m = 1;
  let a = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    m = m * +arr[i];
    a = a + +arr[i];
  }
  sum = +m - a;
  console.log(m, +" " + a + " " + sum);
  return sum;
}
let n = 234;
fn(n);
