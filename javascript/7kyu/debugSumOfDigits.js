// Debug function getSumOfDigits that takes positive integer to
// calculate sum of it's digits. Assume that argument is an integer.

// Example

// 123  => 6
// 223  => 7
// 1337 => 15

function getSumOfDigits(integer) {
  let sum = 0;
  const digits = [];

  integer
    .toString()
    .split("")
    .map((char) => {
      digits.push(Number(char));
    });

  for (let i = 0; i < digits.length; i += 1) {
    sum = sum + digits[i];
  }
  return sum;
}

console.log(getSumOfDigits(123));
// 6
