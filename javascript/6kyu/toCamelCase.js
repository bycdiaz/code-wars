/*
Complete the method/function so that it converts dash/underscore
delimited words into camel casing. The first word within the
output should be capitalized only if the original word was
capitalized
*/

const delimiters = ['-', '_'];

function splitOnDelimiter(string) {
  const wordsFromString = [];
  let currentWord = '';

  for (const element of string) {
    const delimiterDetected = delimiters.includes(element) && currentWord.length;
    
    if (delimiterDetected) {
      wordsFromString.push(currentWord.toLowerCase());
      currentWord = '';

      continue;
    }

    currentWord += element;
  }

  if (currentWord.length) {
    wordsFromString.push(currentWord.toLowerCase());
  }

  return wordsFromString;
}

const capitalizeWord = (string) => `${string.slice(0,1).toUpperCase()}${string.slice(1)}`;

function toCamelCase(str){
  if (str === '') return str;

  const splitString = splitOnDelimiter(str);

  return splitString.reduce((resultString, currentWord, index) => {
    const firstletterLowercased = index === 0 && str[0] === str[0].toLowerCase();

    if (firstletterLowercased) {
      resultString += currentWord;
    } else {
      resultString += capitalizeWord(currentWord);
    }

    return resultString;
  },'');
}

console.log(toCamelCase("the_stealth_warrior"));
// "theStealthWarrior"

console.log(toCamelCase("The-Stealth-Warrior"));
// "TheStealthWarrior"

console.log(toCamelCase("A-B-C"));
// "ABC"

console.log(toCamelCase(''));
// ''