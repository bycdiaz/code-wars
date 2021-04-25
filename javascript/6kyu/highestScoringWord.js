/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in
the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest
in the original string.

All letters will be lowercase and all inputs will be valid.

*/

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];

function wordScore(word) {
  return word.split('').reduce((score, letter) => {
    const letterValue = alphabet.indexOf(letter) + 1;

    score += letterValue;

    return score;
  }, 0)
}

function high(string){
  let highest = {
    word: '',
    value: 0
  };

  string.split(' ').map(word => {
    const wordAndValue = { word, value: wordScore(word) };

    if (wordAndValue.value > highest.value) {
      highest = wordAndValue;
    }

    return wordAndValue;
  })

  return highest.word;
}

console.log(high('man i need a taxi up to ubud'));
// 'taxi'
