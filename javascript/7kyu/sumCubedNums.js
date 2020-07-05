// Find the sum of the odd numbers within an array, after cubing the initial integers.
// The function should return undefined/None/nil/NULL if any of the values aren't numbers.

function cubeOdd(arr) {
  const notNum = (element) => typeof element !== 'number';
  if (arr.some(notNum)) return undefined;
  const odd = (num) => num % 2 != 0;
  
  return arr.filter(odd).map(num => Math.pow(num, 3)).reduce((acc, cur) => acc + cur, 0);
}

console.log(cubeOdd(["a",12,9,"z",42]));
// undefined

console.log(cubeOdd([-3,-2,2,3]));
// 0

console.log(cubeOdd([1, 2, 3, 4]));
// 28
