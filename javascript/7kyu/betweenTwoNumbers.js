// Build a function that can get all the integers between two given numbers.

// (2,9) should give you this output back: [ 3, 4, 5, 6, 7, 8 ]

function range(startNum, endNum) {  
  const rangeOfNumbers = [];

  for (let index = startNum + 1; index < endNum; index++) {
    rangeOfNumbers.push(index);
  }

  return rangeOfNumbers;
};

console.log(range(2,9));
// [ 3, 4, 5, 6, 7, 8 ]
