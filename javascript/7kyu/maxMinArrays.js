// You will be given an array of unique elements, and your task is to rerrange the values so that the
// first max value is followed by the first minimum, followed by second max value then second min
// value, etc.

function solve(array){
  const sortedArray = array.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;
  const minMaxArray = [];

  while (leftIndex <= rightIndex) {
    const rightElement = sortedArray[rightIndex];
    const leftElement = sortedArray[leftIndex];
    
    minMaxArray.push(rightElement);
    
    if (leftIndex !== rightIndex) {
      minMaxArray.push(leftElement);
    }

    leftIndex++;
    rightIndex--;
  }

  return minMaxArray;
};

console.log(solve([15,11,10,7,12]));
// [15,7,12,10,11]
