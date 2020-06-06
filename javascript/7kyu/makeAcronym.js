// Implement a function called makeAcronym that returns the first letters of each word in a passed in string.

// Make sure the letters returned are uppercase.

// If the value passed in is not a string return 'Not a string'.

// If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.

// If the string is empty, just return the string itself: "".

// EXAMPLES:

// 'Hello codewarrior' -> 'HC'

// 'a42' -> 'Not letters'

// 42 -> 'Not a string'

// [2,12] -> 'Not a string'

// {name: 'Abraham'} -> 'Not a string'

const makeAcronym = function(string){
  if ((typeof string !== 'string')) return 'Not a string'
  if (/\d/.test(string)) return 'Not letters'
  let acronym = '';

  string.split(' ').forEach(word => { acronym += word[0].toUpperCase() });

  return acronym;
};

console.log(makeAcronym('Hello codewarrior'));
// 'HC'

console.log(makeAcronym('My aunt sally'));
// MAS

console.log(makeAcronym('42'));
// 'Not letters'

console.log(makeAcronym([2,12]));
// 'Not a string'