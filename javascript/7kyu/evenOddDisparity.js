// Given an array, return the difference between the count of even numbers and the count of odd numbers.
// 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.

// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters.

function isEven(element) {
  return element % 2 === 0;
}

function isNumber(element) {
  return typeof element === 'number';
}

function solve(input){
  const evens =[];
  const odds = [];

  input.forEach(element => {
    if (isNumber(element)) {
      isEven(element) ? evens.push(element) : odds.push(element);
    }

  })

  return evens.length - odds.length;
};

console.log(solve([0,1,2,3]));
// 0 because there are two even numbers and two odd 