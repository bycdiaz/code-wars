// Write a program that, given a word, computes the scrabble score for that word.
// Letter Values

// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

// There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.
// Examples

// "cabbage" --> 14

const letterValues = {
  E: 1,
  A: 1,
  I: 1,
  O: 1,
  N: 1,
  R: 1,
  T: 1,
  L: 1,
  S: 1,
  U: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

function scrabbleScore(str){
  const strArray = str.toUpperCase().split('');
  const keysArray = Object.keys(letterValues);
  let score = 0;
  strArray.forEach(char => {
    if (keysArray.includes(char)) score += letterValues[char];
  });

  return score;
}

console.log(scrabbleScore("cabbage"));
// 14