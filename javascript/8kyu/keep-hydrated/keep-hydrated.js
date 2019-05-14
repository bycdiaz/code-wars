// Nathan loves cycling.
//
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres
// of water per hour of cycling.
//
// You get given the time in hours and you need to return the number of litres
// Nathan will drink, rounded to the smallest value.
//
// For example:
//
// time = 3 ----> litres = 1
//
// time = 6.7---> litres = 3
//
// time = 11.8--> litres = 5

// My initial solution.
// function litres(time) {
//   let litresDrank = Math.floor(0.5 * time); // Math.floor rounds to lowest integer
//   return litresDrank;
// }

// my reworked arrow format

let litres = time => Math.floor(0.5 * time);

console.log(litres(11.8));
