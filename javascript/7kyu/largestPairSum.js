/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/

const ascending = (a, b) => a - b;
const sum = (sum, number) => sum + number;

function largestPairSum(numbers) {
  const twoLargest = numbers.sort(ascending).slice(numbers.length - 2);

  return twoLargest.reduce(sum, 0);
}

console.log(largestPairSum([-100,-29,-24,-19,19]));
// 0

console.log(largestPairSum([10, 14, 2, 23, 19]));
// 42
