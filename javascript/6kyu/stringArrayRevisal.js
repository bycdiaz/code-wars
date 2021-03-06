// In this Kata, you will be given an array of strings and your task is to remove all
// consecutive duplicate letters from each string in the array.

// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be alphabet characters only. Don't worry about lower and upper case.
// See test cases for more examples.

function dup(stringArray) {
  const result = [];
  stringArray.map((string) => {
    const newString = [];
    string.split('').forEach((char, index) => {
      if (string[index] !== string[index + 1]) {
        newString.push(char);
      }
    });
    result.push(newString.join(''));
  });
  return result;
}

console.log(dup(['abracadabra', 'allottee', 'assessee']));
// ["abracadabra","alote","asese"]

console.log(dup(['kelless', 'keenness']));
// ["keles","kenes"]
