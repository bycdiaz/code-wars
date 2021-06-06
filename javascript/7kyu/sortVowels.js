/*
Write a function which takes a input string s and return a string in the following way:

                  C|                          R|
                  |O                          n|
                  D|                          d|
   "Codewars" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|
*/

const vowels = ['a', 'e', 'i', 'o','u'];

function buildSubstring(character, charIsVowel, atLastCharacter) {
  let substring = '';

  if (charIsVowel && atLastCharacter) {
    substring += `|${character}`;
  } else if (charIsVowel && !atLastCharacter) {
    substring += `|${character}\n`;
  }

  if (!charIsVowel && atLastCharacter) {
    substring += `${character}|`;
  } else if (!charIsVowel && !atLastCharacter) {
    substring += `${character}|\n`;
  }

  return substring;
}

function sortVowels(string){
  if (!string || typeof string === undefined) return '';
  let resultString = '';

  for (let index = 0; index < string.length; index++) {
    const character = string[index];
    const charIsVowel = vowels.includes(character.toLowerCase());
    const atLastCharacter = index === string.length - 1;

    resultString += buildSubstring(character, charIsVowel, atLastCharacter);
  }

  return resultString;
}

console.log(sortVowels('EVXTITNI'));
// '|E\nV|\nX|\nT|\n|I\nT|\nN|\n|I'

console.log(sortVowels('Codewars'));
// 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
