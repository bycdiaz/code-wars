/*
Write a function, persistence, that takes in a positive
parameter num and returns its multiplicative
persistence, which is the number of times you must
multiply the digits in num until you reach a single
digit.
*/

function persistence(num) {
  let iterations = 0;

  while (num > 9) {
    num = num.toString().split('').reduce((product, numAsString) => {
      product *= Number(numAsString);

      return product;
    })

    iterations++;
  }

  return iterations;
}

console.log(persistence(39));
// 3

console.log(persistence(999));
// 4

console.log(persistence(4));
// 0