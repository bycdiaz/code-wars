// Given a string, remove any characters that are unique from the string.

// initial attempt
// function onlyDuplicates(str) {
//   const count = {};
//   let unique = [];
//   let result = '';
//   str.split('').forEach(char => {
//     count[char] ? count[char] += 1 : count[char] = 1;
//   })

//   for (let [key, value] of Object.entries(count)) {
//     if (value === 1) unique.push(key)
//   }
  
//   str.split('').forEach(char => {
//     if (!unique.includes(char)) result += char;
//   })

//   return result;
// }

function countLetters(stringArray) {
  return stringArray.reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;
    return count;
  }, {});
}

function onlyDuplicates(string) {
  const stringAsArray = string.split('');
  const letterCount = countLetters(stringAsArray);

  return stringAsArray.reduce((string, letter) => {
    if (letterCount[letter] > 1) string += letter;
    return string;
  }, '');
}

console.log(onlyDuplicates("abccdefee"));
// "cceee"

console.log(onlyDuplicates('colloquial'));
// 'ollol'

console.log(onlyDuplicates('foundersandcoders'));
// 'ondersndoders'