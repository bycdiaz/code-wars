// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(string) {
  const numbers = [];

  string.split(' ').map((stringedNum) => numbers.push(Number(stringedNum)));

  function compareNumbers(a, b) {
    return a - b;
  }

  const sortedNumbers = numbers.sort(compareNumbers).reverse();

  return `${sortedNumbers[0]} ${sortedNumbers[sortedNumbers.length - 1]}`;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
// '542 -214';

// console.log(highAndLow('1 2 3 4 5'));
// return "5 1"

// console.log(highAndLow('1 2 -3 4 5'));
// return "5 -3"

// console.log(highAndLow('1 9 3 4 -5'));
// return "9 -5"
