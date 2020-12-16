// Complete the function to test if the given number (num) can be
// rearranged to form a numerical palindrome or not. Return a
// boolean (true if it can be rearranged to a palindrome, and
// false if it cannot). Return "Not valid" if the input is not
// an integer or is less than 0.

// For this kata, single digit numbers are NOT considered numerical
// palindromes.

function palindrome(num) {
  if (typeof num === 'string' || num < 0) return "Not valid";
  if (num < 10) return false;

  const splitNumber = num.toString().split('');
  const nonEvenOccurances = new Set();

  for (digit of splitNumber) {
    if (nonEvenOccurances.has(digit)) {
      nonEvenOccurances.delete(digit);
    } else {
      nonEvenOccurances.add(digit);
    }
  }

  return nonEvenOccurances.size <= 1;
}

console.log(palindrome(7));
// false

console.log(palindrome(89698));
// true

console.log(palindrome(1212));
// true
