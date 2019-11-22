// Write a function that takes a single string (word) as argument. The function must return an ordered
// list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  let split_word = word.split("")
  let length = word.split("").length
  
  let result = []
  for (i = 0; i < length; i++) {
    if (split_word[i] == split_word[i].toUpperCase()) {
      result.push(i)
    }
  }

  return result
};

console.log(capitals('CodEWaRs'));
// [0,3,4,6]