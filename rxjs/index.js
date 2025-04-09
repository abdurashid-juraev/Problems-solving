const symbols = [
  { symbol: "XFX", price: 240.22, volume: 2323 },
  { symbol: "TNZ", price: 212, volume: 222 },
  { symbol: "JXJ", price: 222, volume: 111 },
];

function getStockSymbols(arr) {
  let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i].symbol);
  // }
  arr.forEach((element) => {
    newArr.push(element.symbol);
  });
  console.log(JSON.stringify(newArr));
  return newArr;
}

getStockSymbols(symbols);
