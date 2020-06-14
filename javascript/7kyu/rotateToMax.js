// Given a number, return the maximum value by rearranging its digits.

// Examples:

// (123) => 321 (786) => 876 ("001") => 100 (999) => 999 (10543) => 54310

// ^Note the number may be given as a string

const rotateToMax = n => {
  let numArray = [];
  if (typeof n === 'number') numArray = n.toString().split('');
  if (typeof n === 'string') numArray = n.split('');

  numArray.map(char => Number(char));

  return Number(numArray.sort((a, b) => a - b).reverse().join(''));
}

console.log(rotateToMax(123));
// 321

console.log(rotateToMax(786));
// 786

console.log(rotateToMax("001"));
// 100

console.log(rotateToMax(999));
// 999

console.log(rotateToMax(10543));
// 54310