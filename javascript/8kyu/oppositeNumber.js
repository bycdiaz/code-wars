// Given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// Initial Solution
// function opposite(number) {
//   if (number > 0) {
//     return `${-number}`;
//   } else {
//     return Math.abs(number);
//   }
// }

// With ternary
function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}

// console.log(opposite(1));
// -1

// console.log(opposite(-34));
// 34
