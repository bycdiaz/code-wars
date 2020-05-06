// Given a series of numbers as a string, determine if the number
// represented by the string is divisible by three.

// You can expect all test case arguments to be strings representing
// values greater than 0. 

function divisibleByThree(str) {
  const numbers = str.toString('').split('').map(num => Number(num));

  return numbers.reduce((a, b) => a + b, 0) % 3 === 0
}

console.log(divisibleByThree('123'));
// true