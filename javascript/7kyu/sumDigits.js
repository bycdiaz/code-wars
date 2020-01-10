// Write a function named sumDigits which takes a number as input and returns the
// sum of the absolute value of each of the number's decimal digits. Let's assume
// that all numbers in the input will be integer values.

function sumDigits(num) {
  return Math.abs(num).toString().split('').map(Number).reduce((a, b) => a + b, 0);
}


console.log(sumDigits(10));
// Returns 1

console.log(sumDigits(99));
// Returns 18

console.log(sumDigits(-32));
// Returns 5
