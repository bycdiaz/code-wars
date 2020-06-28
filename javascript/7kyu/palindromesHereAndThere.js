// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that
// is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic
// numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

function isPalindrome (num) {
  const nArray = num.toString().split('');
  let lIndex = 0;
  let rIndex = nArray.length -1;
  const isPali = [];

  while (lIndex <= nArray.length / 2) {
    nArray[lIndex] === nArray[rIndex] ? isPali.push(true) : isPali.push(false);
    lIndex += 1;
    rIndex -= 1;
  }

  return !isPali.some(status => status === false);
}

function convertPalindromes(nums) {
  return nums.map(num => isPalindrome(num) ? num = 1 : num = 0);
};

console.log(convertPalindromes([101, 2, 85, 33, 14014]));
// [1, 1, 0, 1, 0]

console.log(convertPalindromes([45, 21, 303, 56]));
// [0, 0, 1, 0]