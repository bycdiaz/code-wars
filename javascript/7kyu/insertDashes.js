// Write a function insertDash(num)/InsertDash(int num) that will insert dashes
// ('-') between each two odd numbers in num. For example: if num is 454793 the
// output should be 4547-9-3. Don't count zero as an odd number.

// Note that the number will always be non-negative (>= 0).

function insertDash(string) {
  const dashedNums = [];

  const numbers = string.toString().split('').map((stringNum) => Number(stringNum));

  numbers.forEach((digit, index) => {
    if ((digit % 2 === 1) && (numbers[index + 1] % 2 === 1)) {
      dashedNums.push(digit);
      dashedNums.push('-');
    } else {
      dashedNums.push(digit);
    }
  });

  return dashedNums.join('');
}

console.log(insertDash(454793));
// '4547-9-3'
