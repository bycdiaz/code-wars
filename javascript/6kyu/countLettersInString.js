// In this kata, you've to count lowercase letters in a given string and return the letter count
// in a hash with 'letter' as key and count as 'value'.

function letterCount(s){
  return s.split('').reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;

    return count;
  }, {})
}

console.log(letterCount("codewars"));
// {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1}