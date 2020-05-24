// You are given a program squaresOnly that accepts an array of natural numbers up to and including
// 100
// (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

// Refactor the solution to use as few characters as possible. There is a maximum character limit of 127.

function squaresOnly(arr) {
  return arr.filter((num) => Math.sqrt(num) % 1 === 0)
}

console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]));
// [0,1,4,9]