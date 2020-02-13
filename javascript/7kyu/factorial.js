// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n. For
// example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is
// 1.

// Write a function to calculate factorial for a given input. If input is
// below 0 or above 12 throw a RangeError (JavaScript).

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  if (n > 12 || n < 0) {
    throw new RangeError('The argument must be between 0 and 12.');
  } else {
    const range = [];

    for (let i = n; i > 0; i -= 1) {
      range.push(i);
    }

    return range.reduce((acc, cur) => acc * cur);
  }
}


factorial(0);
// 1, "factorial for 0 is 1"

// console.log(factorial(1));
// 1, "factorial for 1 is 1"

// console.log(factorial(2));
// 2, "factorial for 2 is 2"

// console.log(factorial(3));
// 6, "factorial for 3 is 6"
