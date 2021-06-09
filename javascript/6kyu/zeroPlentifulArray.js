/*
An array is called zero-plentiful if it contains at least one 0 and every sequence
of 0s is of length at least 4. Your task is to return the number of zero sequences
if the given array is zero-plentiful else 0.
*/

function zeroPlentiful(array){
  const lengthsOfZeroSequences = [];
  let currentSequenceLength = 0;
  for (let index = 0; index < array.length; index++) {
    const currentNumber = array[index];
    
    if (currentNumber === 0) {
      currentSequenceLength++;
    } else {
      if (currentSequenceLength !== 0) {
        lengthsOfZeroSequences.push(currentSequenceLength);
      }
      currentSequenceLength = 0;
    }
  }

  if (currentSequenceLength) {
    lengthsOfZeroSequences.push(currentSequenceLength);
  }

  if (lengthsOfZeroSequences.every(length => length >= 4)) {
    return lengthsOfZeroSequences.length;
  } else {
    return 0;
  }

}

console.log(zeroPlentiful([ 0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0 ]));
// 0

// console.log(zeroPlentiful([3]));
// 0

// console.log(zeroPlentiful([0,0,0,0,0,0]));
// 1
