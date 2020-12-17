// Write a function hasOneChar returning:

// true if the given string contains the same character repeated all along the string
// false otherwise.

// You have to achieve it without using any loops.

function hasOneChar(s) {
  return new Set(s).size === 1;
}

console.log(hasOneChar('a'));
// true

console.log(hasOneChar('aaaaa'));
// true

console.log(hasOneChar('aaaab'));
// false
