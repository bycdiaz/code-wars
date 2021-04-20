/*
Given a lowercase string that has alphabetic characters only and no spaces,
return the highest value of consonant substrings. Consonants are any
letters of the alphabet except "aeiou". 
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

function getConsonantGroups(string) {
  const consonantGroups = [];
  let currentSubstring = '';

  for (const letter of string) {
    const letterIsConsonant = !vowels.includes(letter);

    if (letterIsConsonant) {
      currentSubstring += letter;
    } else {
      consonantGroups.push(currentSubstring);
      currentSubstring = '';
    }
  }

  if (currentSubstring) {
    consonantGroups.push(currentSubstring);
  }

  return consonantGroups;
}

function solve(s) {
  const consonantGroups = getConsonantGroups(s);

  const groupTotals = consonantGroups.map(group => {
    return group.split('').reduce((sum, letter) => {
      const value = alphabet.indexOf(letter) + 1;
      sum += value;

      return sum;
    }, 0)

  });

  return Math.max(...groupTotals);
};

console.log(solve("strength"));
// 57

console.log(solve("zodiac"));
// 26
