// Given an array of integers, return the sum of all the integers that have an even index,
// multiplied by the integer at the last index.

// If the array is empty, you should return 0.

function evenLast(numbers) {
  const evens = [];
  if (numbers.length === 0) return 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (index % 2 === 0) evens.push(numbers[index]);
  }
  return (evens.reduce((acc, cur) => acc + cur, 0)) * numbers[numbers.length - 1];
}

console.log(evenLast([]));
// 0

console.log(evenLast([2, 3, 4, 5]));
// 30
