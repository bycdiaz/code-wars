// Given two integer arrays a, b, both of length >= 1, create a program that returns true
// if the sum of the squares of each element in a is strictly greater than the sum of the
// cubes of each element in b.

function arrayMadness(array1, array2) {
  const numsSquared = [];
  const numsCubed = [];
  const squares = [numsSquared, numsCubed];
  const sums = [];

  array1.forEach((element) => {
    numsSquared.push(element ** 2);
  });

  array2.forEach((element) => {
    numsCubed.push(element ** 3);
  });

  squares.forEach((element) => {
    sums.push(element.reduce((acc, curr) => acc + curr));
  });

  return sums[0] > sums[1];
}


console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
// true

console.log(arrayMadness([5, 6, 7], [4, 5, 6]));
// false
