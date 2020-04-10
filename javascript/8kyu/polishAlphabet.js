// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą a,
// ć c,
// ę e,
// ł l,
// ń n,
// ó o,
// ś s,
// ź z,
// ż z

// and print out the string without the use of the Polish letters.

function correctPolishLetters(string) {
  const letterPairs = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  };
  const result = [];
  string.split('').forEach((letter) => {
    if (Object.keys(letterPairs).includes(letter)) {
      Object.keys(letterPairs).forEach((polishAlpha) => {
        if (polishAlpha === letter) {
          result.push(letterPairs[polishAlpha]);
        }
      });
    } else {
      result.push(letter);
    }
  });
  return result.join('');
}

console.log(correctPolishLetters('Jędrzej Błądziński'));
// "Jedrzej Bladzinski"
