// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

// function removeChar(str) {
//     return str.slice(1, -1);
//   }

// in the example below, I'm not explicitly removing the start and end. I'm extracting everything between the start and end, dropping the ends.

let removeChar = (str) => str.slice(1,-1);

console.log(removeChar("carlos"));
   
   