// Write a function called repeatStr which repeats the given string string exactly n times.
//
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// function repeatStr(number,string) {
//   return string.repeat(number);
// }

let repeatStr = (number,string) => string.repeat(number);

console.log(repeatStr(5, "Hello"));
