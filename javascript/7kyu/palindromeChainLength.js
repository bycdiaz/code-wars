// Write a function which takes a positive integer and returns the
// number of special steps needed to obtain a palindrome. The
// special step is: "reverse the digits, and add to the original
// number". If the resulting number is not a palindrome, repeat
// the procedure with the sum until the resulting number is a
// palindrome.

// If the input number is already a palindrome, the number of steps is 0.

function palindromeCheck(number) {
  if (number < 10) return true;

  const splitNumber = number.toString().split('');
  let leftIndex = 0;
  let rightIndex = splitNumber.length - 1;

  while (leftIndex < rightIndex) {
    const leftElement = splitNumber[leftIndex];
    const rightElement = splitNumber[rightIndex];

    if (leftElement !== rightElement) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
}

const reverseNumber = (number) => Number(number.toString().split('').reverse().join(''));

function palindromeChainLength (n) {
  let stepsUntilPalindrome = 0;
  let originalNumber = n;

  let isPalindrome = palindromeCheck(n);

  while (!isPalindrome) {
    const reversedNumber = reverseNumber(originalNumber);
    const newTotal = originalNumber + reversedNumber;

    stepsUntilPalindrome++;
    isPalindrome = palindromeCheck(newTotal);
    
    if (!isPalindrome) originalNumber = newTotal;
  }

  return stepsUntilPalindrome;
};

console.log(palindromeChainLength(89));
// 24

// console.log(palindromeChainLength(87));
// 4

// console.log(palindromeChainLength(88));
// 0

// console.log(palindromeChainLength(8));
// 0
