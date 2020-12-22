// You must concatenate the nth letter from each word to construct a new word
// which should be returned as a string, where n is the position of the word
// in the list.

// initial solution
// function nthChar(words){
//   let newString = '';
//   let currentIndex = 0;

//   for (word of words) {
//     newString += word[currentIndex];

//     currentIndex++;
//   }

//   return newString;
// }

// with reduce
function nthChar(words){
  return words.reduce((newString, currentWord, index) => {
    return newString += currentWord[index];
  }, '')
}

console.log(nthChar(['yoda', 'best', 'has']));
// 'yes'
