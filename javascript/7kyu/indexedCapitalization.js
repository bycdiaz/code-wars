// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// The input will be a lowercase string with no spaces and an array of digits.

function capitalize(s,arr){
  const result = [];
  s.split('').forEach((char, i) => {
    arr.includes(i) ? result.push(char.toUpperCase()) : result.push(char);
  })

  return result.join('');
}

console.log(capitalize("abcdef",[5,2,1]));
// "aBCdeF"

console.log(capitalize("abcdef",[1,2,5,100]));
// "aBCdeF". There is no index 100.