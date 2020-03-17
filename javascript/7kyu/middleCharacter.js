// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even,
// return the middle 2 characters.

function getMiddle(string) {
  const splitString = string.split('');
  const even = splitString.length % 2 === 0;
  let result;

  if (splitString.length < 2) {
    if (splitString.length === 2) {
      result = splitString;
    } else {
      [result] = splitString;
    }
  } else if (even) {
    while (splitString.length > 3) {
      splitString.pop();
      splitString.shift();
      result = splitString.join('');
    }
  } else {
    result = splitString[((splitString.length + 1) / 2) - 1];
  }

  return result;
}

console.log(getMiddle('test'));
// "es"

console.log(getMiddle('testing'));
// "t"

console.log(getMiddle('middle'));
// "dd"

console.log(getMiddle('A'));
// "A"
