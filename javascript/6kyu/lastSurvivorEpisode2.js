/*
Substitute two equal letters by the next letter of the alphabet (two
  letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".

The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"

Notes

    The order of letters in the result is not important.
    The letters "zz" transform into "a".
    There will only be lowercase letters.

*/

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]

function getLettersCount(string) {
  return string.split('').reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;

    return count;
  }, {})
}

function getNextLetter(currentLetter) {
  const currentLetterIndex = alphabet.indexOf(currentLetter);
  
  return alphabet[(currentLetterIndex + 1) % alphabet.length];
}

function lastSurvivors(str) {
  const lettersCount = getLettersCount(str);
  const greaterThanOrEqualToTwo = (number) => number >= 2;
  let allCountsTwoOrGreater = Object.values(lettersCount).some(greaterThanOrEqualToTwo);

  while (allCountsTwoOrGreater) {
    for (const letter in lettersCount) {
      const currentLetterCount = lettersCount[letter];

      if (currentLetterCount >= 2) {
        const nextLetter = getNextLetter(letter);
        lettersCount[letter] = lettersCount[letter] - 2;

        lettersCount[nextLetter] ? lettersCount[nextLetter]++ : lettersCount[nextLetter] = 1;
      }
    }

    allCountsTwoOrGreater = Object.values(lettersCount).some(greaterThanOrEqualToTwo);
  }

  return Object.entries(lettersCount).reduce((resultString, entry) => {
    const [letter, count] = entry;

    if (count) resultString += letter;

    return resultString;
  }, '');
}

console.log(lastSurvivors("zzzab"));
// "cz"