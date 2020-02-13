// I'm new to coding and now I want to get the sum of two arrays...
// actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// my initial solution
// function arrayPlusArray(arr1, arr2) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;

//   return arr1.reduce(reducer) + arr2.reduce(reducer);
// }

// top solution from codewars: joins two arrays then adds all values
// I added initial value of 0 to address possibility of empty arrays
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// 21

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
// -21

console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
// 15

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
// 2100
