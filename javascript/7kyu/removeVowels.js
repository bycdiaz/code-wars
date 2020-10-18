// Create a function, called removeVowels (or remove_vowels), that takes a string argument
// and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").



function removeVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const identifyNonVowels = (string, character) => {
    const notAVowel = !vowels.includes(character);
    if (notAVowel) string += character;
    return string;
  }

  return string.split('').reduce(identifyNonVowels, '');
}

console.log(removeVowels("drake"));
// => "drk"

console.log(removeVowels("aeiou"));
// => ""