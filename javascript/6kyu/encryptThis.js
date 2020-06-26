// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.

function encryptThis(text) {
  const textArray = text.split(' ');
  const result = [];

  textArray.forEach(word => {
    if (word) {
      const wordArray = word.split('');
      const firstChar = word.charCodeAt(0);
      const secondChar = word[1];
      const lastChar = word[word.length - 1]
      wordArray[0] = `${firstChar}`;
      wordArray[1] = lastChar;
      wordArray[wordArray.length - 1] = secondChar;
      result.push(wordArray.join(''));
    }
  })
  return result.join(' ');
}

console.log(encryptThis("Hello"));
// "72olle"

console.log(encryptThis("good"));
// "103doo"

console.log(encryptThis("hello world"));
// "104olle 119drlo"