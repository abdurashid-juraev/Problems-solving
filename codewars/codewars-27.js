/*
Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.

Examples
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"
*/

const capitals = [
  { state: "Uzbekistan", capital: "Tashkent" },
  { country: "Tajikistan", capital: "Dushanbe" },
];
function capital(capitals) {
  let str = [];

  for (let i = 0; i < capitals.length; i++) {
    str.push(
      `The capital of ${capitals[i].country || capitals[i].state} is ${
        capitals[i].capital
      }`
    );
  }
  console.log(str);
  return str;
}
capital(capitals);
