/*
The objective is to return all pairs of integers from a given array
of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of
the integers in the input array should not matter.

Examples

[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

function sortAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

function twosDifference(input){
  const pairs = [];
  const sortedNumbers = sortAscending(input);

  for (let index = 0; index < sortedNumbers.length; index++) {
    const currentNumber = sortedNumbers[index];
    const upComingNumbers = sortedNumbers.slice(index + 1);

    for (let i = 0; i < upComingNumbers.length; i++) {
      const nextNumber = upComingNumbers[i];
      const differenceOfTwo = (nextNumber - currentNumber) === 2;

      if (differenceOfTwo) {
        pairs.push([currentNumber, nextNumber]);
      }
    }
  }
  
  return pairs;
}

console.log(twosDifference([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
