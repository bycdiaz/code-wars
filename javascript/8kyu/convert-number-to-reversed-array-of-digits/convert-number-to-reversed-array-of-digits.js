// Given a random number:
//
// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.
//
// Example:
// 348597 => [7,9,5,8,4,3]

// my initial solution

// function digitize(n) {
//
//   // convert number to array
//   let numberToString = (n).toString(10).split("").map(Number)
//
//   // reverse array
//   let reversedArray = numberToString.reverse();
//   return reversedArray;
// }

function digitize(n) {

  // convert number to string, then array, then number, then reverse
  let numberToString = (n).toString(10).split("").map(Number).reverse();

  return numberToString;
}

console.log(digitize(548702838394));
