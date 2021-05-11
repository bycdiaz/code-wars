/*
Re-order the characters of a string, so that they are concatenated
into a new string in
"case-insensitively-alphabetical-order-of-appearance" order.
Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words
containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

function createAlphabetObject() {
  return [...Array(26)].reduce((object, _, index) => {
    const currentLetter = String.fromCharCode(index + 65);
    object[currentLetter] = [];

    return object;
  }, {})
}

function alphabetized(string) {
  const alphabetObject = createAlphabetObject();
  
  for (const element of string) {
    if (alphabetObject[element.toUpperCase()]) {
      alphabetObject[element.toUpperCase()].push(element);
    }
  }

  return Object.values(alphabetObject).reduce((string, array) => {
    if (array) string += array.join('');

    return string;
  }, '');
}

console.log(alphabetized("The Holy Bible"));
// "BbeehHilloTy"
