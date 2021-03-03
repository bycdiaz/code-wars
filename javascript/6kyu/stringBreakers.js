// Given an integer (N) and a string, break the string up into as many
// substrings of N as you can without spaces. If there are leftover
// characters, include those as well.


function stringBreakers(n, string){
  const lettersOnly = string.replace(/[ ]/g, '');
  let currentString = '';
  let resultString = '';

  for (let index = 0; index < lettersOnly.length; index++) {
    const currentLetter = lettersOnly[index];
    
    if (currentString.length < n) {
      currentString += currentLetter;
    } else {
      resultString += currentString + '\n';
      currentString = currentLetter;
    }
  }

  resultString += currentString;

  return resultString;
}

console.log(stringBreakers(5, "This is an example string"));
// Thisi
// sanex
// ample
// strin
// g
