const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const observable = new Observable((subscriber) => {
  subscriber.next(arr);
});

const observer = {
  next: (value) => {
    console.log("Next " + value);
  },
  error: (err) => {
    console.log("Error " + err);
  },
  complete: () => {
    console.log("Strem is complete");
  },
};

observable
  .pipe(
    map((arr) => {
      console.log("map");
      return arr.map((item) => item * 2);
    })
  )
  .subscribe(observer);
