// Write a function that returns a sequence of numbers from 1 to 100.

// The function should be able to be called with or without arguments.

// If no arguments are given, each number in the sequence divisible by
// 3 should be replaced with the word 'Fizz', and each number in the
// sequence divisible by 5 should be replaced with the word 'Buzz'. If
// the number is divisble by both 3 and 5, then it should be replaced
// with 'FizzBuzz'.

// The function should also be able to take up to 4 arguments. The first
// and second arguments are strings, which should be 'Fizz' and 'Buzz'
// by default.

// The third and fourth arguments are integers and and should be 3 and
// 5 by default.

function fizzBuzzCustom(stringOne='Fizz', stringTwo='Buzz', numOne=3, numTwo=5) {
  const result = [];
  for (let i = 1; i <= 100; i += 1) {
    if (i % numOne === 0 && i % numTwo === 0) {
      result.push(`${stringOne}${stringTwo}`);
    } else if (i % numOne === 0) {
      result.push(stringOne);
    } else if (i % numTwo === 0) {
      result.push(stringTwo);
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzzCustom());