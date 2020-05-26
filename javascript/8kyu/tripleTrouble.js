// Create a function that will return a string that combines all of the letters of the
// three inputed strings in groups. Taking the first letter of all of the inputs and
// grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// initial solution
// function tripleTrouble(one, two, three){
//   let result = '';

//   for (let index = 0; index < one.length; index += 1) {
//     result += one[index];
//     result += two[index];
//     result += three[index];
//   }

//   return result;
// }

// 2nd attempt
function tripleTrouble(one, two, three){
  let result = '';

  one.split('').forEach((char, index) => {
    result += `${char}${two[index]}${three[index]}`
  });

  return result;
}

console.log(tripleTrouble("aa","bb","cc"));
// "abcabc"