// Write a function that finds the sum of all its arguments.

// eg:

function sum(...args) {
  return args.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3));
// => 6

console.log(sum(8, 2));
// => 10

console.log(sum(1, 2, 3, 4, 5));
// => 15