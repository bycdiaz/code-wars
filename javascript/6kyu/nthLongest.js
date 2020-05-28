// Implement the function longest(array,n) where you will be given an array of strings and then
// return the nth longest string in that array. e.g. arr = ['Hello','World','Codewars','Katas']
// n = 3; should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is
// the 2nd longest word and then 'World' (although also word length of 5, 'World' is after
// 'Hello' in the array). When words have the same lengths, treat them in the order in which
// they exist in the array. Array will never be empty and n > 0 always.

function longest(arr, n) {
  const wordStats = [];
  arr.forEach((word, index) => wordStats.push({ word, index, length: word.length }));

  return wordStats.sort((a, b) => {
    if (a.length > b.length) return -1
    if (a.length < b.length) return 1;
    if (a.index > b.index) return 1;
    if (a.index < b.index) return -1;
  })[n-1].word;
}

console.log(longest(['Hello','World','Codewars','Katas'],3));
// 'World'