// Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter.
// Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.
// Input

//     sequence of numbers: those numbers could be integers and/or floats.

// For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function
// should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

// initial solution
function sumEvenNumbers(input) {
  return input.filter(num => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 30