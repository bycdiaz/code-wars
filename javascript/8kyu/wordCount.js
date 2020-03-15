// Can you realize a function that returns word count from a given string?

// You have to ensure that spaces in string is a whitespace for real.

// What we want and finish of work:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on

// What kind of tests we got for your code:

//     Function have to count words, but not spaces, so
//     be sure that it does right.
//     Empty string has no words.
//     String with spaces around should be trimmed.
//     Non-whitespace (ex. breakspace, unicode chars) should be
//     assumed as delimiter
//     Be sure that words with chars like -, ', ` are counted right.

function countWords(str) {
  let result = [];

  str.split(/\s/g).forEach(element => {
    if (element !== '') {
      result.push(element)
    }
  });
  return result.length;
}

// console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
// 19

// console.log(countWords(" Arthur "));
// 1

console.log(countWords("﻿Hello﻿World "));
// 2

// console.log(countWords("Hello﻿World"));
// 2