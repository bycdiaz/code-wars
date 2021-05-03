/*
Complete the solution so that it splits the string into pairs of
two characters. If the string contains an odd number of
characters then it should replace the missing second character
of the final pair with an underscore ('_').
*/

function solution(str){
  const splitString = [];

  for (let index = 0; index < str.length; index += 2) {
    splitString.push(`${str[index]}${str[index + 1] || '_'}`);
  }

  return splitString;
}

console.log(solution('abc'));
// ['ab', 'c_']

console.log(solution('abcdef'));
// ['ab', 'cd', 'ef']
