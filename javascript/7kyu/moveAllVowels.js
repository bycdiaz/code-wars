// Given a string as input, move all of its vowels to the end
// of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.
// Examples

// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

function moveVowel(input) {
  let vowels = '';
  let consonants = '';

  for (const letter of input) {
    if (vowelsArray.includes(letter)) {
      vowels += letter;
    } else {
      consonants += letter;
    }
  }

  return consonants + vowels;
}

console.log(moveVowel("day"));
// "dya"

console.log(moveVowel("apple"));
// "pplae"