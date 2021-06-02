/*
Given an array of words, return an array of the number of letters that
occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
*/

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];

function solve(arrayOfWords){  
  return arrayOfWords.reduce((similarIndices, word) => {
    let count = 0;

    for (let index = 0; index < word.length; index++) {
      const indexAtAlphabet = alphabet.indexOf(word[index].toLowerCase());
      
      if (index === indexAtAlphabet) {
        count++;
      }
    }

    similarIndices.push(count);
    count = 0;

    return similarIndices;
  }, [])
};


console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));
// [6, 5, 7]

console.log(solve(["abode","ABc","xyzD"]));
// [4, 3, 1]
