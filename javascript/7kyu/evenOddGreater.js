// Given a string of digits confirm whether the sum of all
// the individual even digits are greater than the sum of
// all the indiviudal odd digits.

function stringToNums(string) {
  return string.split('').map(character => Number(character));
}

function filterEvensOdds(arrayOfNumbers) {
  return arrayOfNumbers.reduce((object, currentNumber, index) => {
    const numberIsEven = currentNumber % 2 === 0;

    numberIsEven ? object.evens.push(currentNumber) : object.odds.push(currentNumber);

    return object;
  }, {
    evens: [],
    odds: []
  })
}

function sumNumbers(object) {
  const sum = (sum, current) => sum + current;

  return Object.entries(object).reduce((sums, currentEntry) => {
    const [key, numbersArray] = currentEntry;
    if (key === 'evens') {
      sums[0] = numbersArray.reduce(sum);
    } else {
      sums[1] = numbersArray.reduce(sum);
    }

    return sums;

  }, [0, 0])
}

function evenOrOdd(str) {
  const numbersArray = stringToNums(str);
  const evensAndOdds = filterEvensOdds(numbersArray);
  const [sumOfEvens, sumOfOdds] = sumNumbers(evensAndOdds);
  
  if (sumOfEvens > sumOfOdds) {
    return "Even is greater than Odd";
  } else if (sumOfOdds > sumOfEvens) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
}

console.log(evenOrOdd('12'));
// 'Even is greater than Odd'

console.log(evenOrOdd('123'));
// 'Odd is greater than Even'

console.log(evenOrOdd('112'));
// 'Even and Odd are the same'