// JavaScript Arrays support a filter function (starting in JavaScript 1.6).
// Use the filter functionality to complete the function given.

function getEvenNumbers(numbersArray){
  return numbersArray.filter((number => number % 2 === 0))
}

console.log(getEvenNumbers([2,4,5,6]));
// [2,4,6]