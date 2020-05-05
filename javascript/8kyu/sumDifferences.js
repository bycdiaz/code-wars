// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([2, 1, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
  const descending = arr.sort((a, b) => a - b).reverse();
  const differences = []
  
  for (let index = 0; index < descending.length - 1; index += 1) {
    differences.push(descending[index] - descending[index + 1])
  }
  return differences.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumOfDifferences([1, 2, 10]));
// 9