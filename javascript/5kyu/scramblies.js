// Complete the function scramble(str1, str2) that returns true if a portion of str1 
// characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

// Input strings s1 and s2 are null terminated.

function countLetters(string) {
  return string.split('').reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;
    return count;
  }, {});
}

function scramble(str1, str2) {
  const firstLetterCount = countLetters(str1);
  const secondLetterCount = countLetters(str2);

  const compareLetterCounts = Object.entries(secondLetterCount).map(keyValue => {
    const key = keyValue[0];
    const value = keyValue[1];

    return firstLetterCount[key] >= value ? true : false;
  })
  
  return compareLetterCounts.every(letterFound => letterFound);
}

console.log(scramble('rkqodlw', 'world'));
// True

console.log(scramble('cedewaraaossoqqyt', 'codewars'));
// True

console.log(scramble('katas', 'steak'));
// False
