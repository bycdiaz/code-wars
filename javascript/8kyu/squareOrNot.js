// Write a method, that will get an integer array as parameter
// and will process every number from this array.
// Return a new array with processing every number of
// the input-array like this:

// If the number has an integer square root, take this,
// otherwise square the number.

// The input array will always contain only positive numbers
// and will never be empty or null.

// The input array should not be modified!

function squareOrSquareRoot(array) {
  const result = [];

  array.forEach((element) => {
    if (Number.isInteger(Math.sqrt(element))) {
      result.push(Math.sqrt(element));
    } else {
      result.push(element ** 2);
    }
  });

  return result;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
// [2,9,3,49,4,1];
