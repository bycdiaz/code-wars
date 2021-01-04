// Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

function numbersArrayToNumber(numbers) {
  if (numbers[0] < 0) {
    numbers[0] = Math.abs(numbers[0]);
    const numberWithoutNegativeSign = numbersArrayToNumber(numbers);
    const hopefullyNegativeNumber = -Math.abs(numberWithoutNegativeSign);
    return hopefullyNegativeNumber;
  } else {
    return numbers.reduce((joinedNumber, number) => {
      joinedNumber += number.toString();
  
      return Number(joinedNumber);
    }, '')
  }
}

function numberToDigitsArray(number) {
  const numberAsArray = number.toString().split('');
  const digitsArray = [];

  for (let index = 0; index < numberAsArray.length; index++) {
    const currentElement = numberAsArray[index];
    const nextElement = numberAsArray[index + 1];

    if (currentElement === '-') {
      digitsArray.push(Number(currentElement + nextElement));
      index++;
    } else {
      digitsArray.push(Number(currentElement));
    }
  }

  return digitsArray;
}

function addArrays(array1, array2) {
  const arraysSum = numbersArrayToNumber(array1) + numbersArrayToNumber(array2);

  return numberToDigitsArray(arraysSum);
}

console.log(addArrays([ -6, 7 ], [ 1, 0 ]));
// [-5, 7]

// console.log(addArrays([6,7], [6,7]));
// [ 1, 3, 4 ]