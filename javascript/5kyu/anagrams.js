/*
Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words. You
should return an array of all the anagrams or an empty array if there
are none.
*/

function countLetters(word) {
  return word.split('').reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;

    return count;
  }, {})
}

function checkIfAnagram(firstCount, secondCount) {
  const targetLetters = Object.keys(firstCount);
  if (targetLetters.length !== Object.keys(secondCount).length) return false;
  
  return targetLetters.every(letter => firstCount[letter] === secondCount[letter]);
}

function anagrams(targetWord, words) {
  return words.filter(word => checkIfAnagram(countLetters(targetWord), countLetters(word)));
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// []
