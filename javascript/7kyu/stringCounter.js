// Your task is to return how many times a string contains a given character.

// The function takes a string(inputS) as a paremeter and a char(charS) which
// is the character that you will have to find and count.

// For example, if you get an input string "Hello world" and the character to
// find is "o", return 2.

// initial attempt
// function stringCounter(inputS, target){
//   let count = 0;
//   for (letter of inputS) {
//     if (letter === target) count++;
//   }

//   return count;
// }

function stringCounter(inputS, target) {
  const stringCountReducer = (acc, val) => val === target ? acc += 1 : acc;

  return inputS.split('').reduce(stringCountReducer, 0);
}

console.log(stringCounter("Hello World!","o"));
// 2