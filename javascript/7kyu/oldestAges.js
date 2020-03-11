// The two oldest ages function/method needs to be completed. It should take an array of numbers
// as its argument and return the two highest numbers within the array. The returned value should
// be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least
// 2 items.

// initial solution
// function twoOldestAges(ages) {
//   let result = [];

//   function compare(a, b) {
//     return a - b;
//   }

//   result = ages.sort(compare).slice(ages.length - 2);

//   return result;
// }

// concise
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
// [45, 87]


// console.log(twoOldestAges([1, 2, 10, 8]));
// // should return [8, 10]
