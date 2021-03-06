// Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters.

function hasUniqueChars(str){
  const uniqueString = new Set(str);
  return uniqueString.size == str.length;
}

console.log(hasUniqueChars("  nAa"));
// false

console.log(hasUniqueChars("abcdef"));
// true

console.log(hasUniqueChars("++-"));
// false
