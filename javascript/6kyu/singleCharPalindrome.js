// You will be given a string and you task is to check if it is
// possible to convert that string into a palindrome by
// removing a single character. If the string is already a
// palindrome, return "OK". If it is not, and we can convert it
// to a palindrome by removing one character, then return
// "remove one", otherwise return "not possible".

function palindromeCheck(string) {
  const splitString = string.split('');
  let leftIndex = 0;
  let rightIndex = splitString.length - 1;

  while (leftIndex < rightIndex) {
    const leftElement = splitString[leftIndex];
    const rightElement = splitString[rightIndex];

    if (leftElement !== rightElement) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
};

function removeOneCharacter(string) {
  for (let outerIndex = 0; outerIndex < string.length; outerIndex++) {
    let stringToTest = '';

    for (let innerIndex = 0; innerIndex < string.length; innerIndex++) {
      if (outerIndex !== innerIndex) {
        stringToTest += string[innerIndex];
      }
    }

    const isPalindrome = palindromeCheck(stringToTest);

    if (isPalindrome) return isPalindrome;
  }
}

function solve(string){
  const isPalindrome = palindromeCheck(string);

  if (isPalindrome) {
    return "OK";
  } else {
    const isNowPalindrome = removeOneCharacter(string);
    return isNowPalindrome ? "remove one" : "not possible";
  }
};

console.log(solve("abba"));
// "OK"

console.log(solve("abbaa"));
// "remove one"

console.log(solve("abbaab"));
// "not possible"

console.log(solve("madmam"));
// "remove one"

console.log(solve("raydarm"));
// "not possible"

console.log(solve("hannah"));
// "OK"