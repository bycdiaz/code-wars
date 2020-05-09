// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
  return `Position of alphabet: ${[...'abcdefghijklmnopqrstuvwxyz'].indexOf(letter) + 1}`;
}

console.log(position("a"));
// "Position of alphabet: 1"

console.log(position("z"));
// "Position of alphabet: 26"

console.log(position("e"));
// "Position of alphabet: 5"