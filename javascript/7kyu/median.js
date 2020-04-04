// The median is the middle number of a sorted list of numbers. If the list
// is of even length, the 2 middle values are averaged.

// Write a function called median() that takes an array of integers as an
// argument and returns the median of those integers.

function median(array) {
  const arrayLength = array.length;
  const sortedArray = array.sort((a, b) => a - b);
  let result = null;

  if ((arrayLength % 2 === 0)) {
    result = (sortedArray[(sortedArray.length / 2) - 1] + sortedArray[sortedArray.length / 2]) / 2;
  } else {
    result = sortedArray[((sortedArray.length + 1) / 2) - 1];
  }

  return result;
}

console.log(median([33, 99, 100, 30, 29, 50]));
// =>  41.5

console.log(median([3, 2, 1]));
// => 2
