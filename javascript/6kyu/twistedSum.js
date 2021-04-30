/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).
Examples

# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/

function createRange(number) {
  const range = [];

  for (let index = 1; index < number + 1; index++) {
    range.push(index);
  }

  return range;
}

function sumDigits(number) {
  return number.toString().split('').reduce((sum, element) => {
    return sum += Number(element);
  }, 0)
}

function twistedSum(n) {
  const numbersOneToN = createRange(n);

  return numbersOneToN.reduce((sum, number) => {
    number > 9 ? sum += sumDigits(number) : sum += number;

    return sum;
  }, 0);
}

console.log(twistedSum(10));
// 46

console.log(twistedSum(4));
// 10
