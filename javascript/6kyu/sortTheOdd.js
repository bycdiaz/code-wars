/*
You will be given an array of numbers. You have to
sort the odd numbers in ascending order while
leaving the even numbers at their original positions.
*/

function identifyOdds(numbersArray) {
  const oddNumbers = [];

  for (let index = 0; index < numbersArray.length; index++) {
    const currentNumber = numbersArray[index];
    const oddNumber = currentNumber % 2 !== 0;

    if (oddNumber) {
      oddNumbers.push(currentNumber);
      numbersArray[index] = 'odd';
    }    
  }

  return [oddNumbers, numbersArray];
}

function insertodds(oddNumbers, array) {
  let oddNumbersIndex = 0;
  oddNumbers.sort((a, b) => a - b);

  return array.reduce((result, current) => {
    if (current === 'odd') {
      result.push(oddNumbers[oddNumbersIndex]);
      oddNumbersIndex++;
    } else {
      result.push(current);
    }

    return result;
  }, [])
}

function sortArray(numbersArray) {
  if (!numbersArray.length) return numbersArray;

  const [oddNumbers, markedArray] = identifyOdds(numbersArray);
  const sortedArray = insertodds(oddNumbers, markedArray);

  return sortedArray;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
// [1, 3, 2, 8, 5, 4]

console.log(sortArray([5, 3, 1, 8, 0]));
// [1, 3, 5, 8, 0]

console.log(sortArray([]));
// []
