/*
Given 2 strings, a and b, return a string of the form:
shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as
prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C#
strings may also be null. Treat them as if they are
empty.).
If a and b have the same length treat a as the longer
producing b+reverse(a)+b
*/

function reverseString(string) {
  const stringAsArray = string.split('');
  let leftIndex = 0
  let rightIndex = stringAsArray.length - 1;

  while (leftIndex < rightIndex) {
    const temp = stringAsArray[leftIndex];
    stringAsArray[leftIndex] = stringAsArray[rightIndex];
    stringAsArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return stringAsArray.join('');
}

function getStringsByLength(first, second) {
  const strings = [];
  const firstLongerOrEqual = first.length >= second.length;

  firstLongerOrEqual ? strings.push(first, second) : strings.push(second, first);

  return strings;
}

function shorter_reverse_longer(a,b){
  const [longer, shorter] = getStringsByLength(a, b);

  return `${shorter}${reverseString(longer)}${shorter}`;
}

console.log(shorter_reverse_longer("first", "abcde"));
// "abcdetsrifabcde"

// console.log(shorter_reverse_longer("hello", "bau"));
// "bauollehbau"
