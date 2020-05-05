// Create a function that takes 2 positive integers in form of a
// string as an input, and outputs the sum (also as a string):

// If either input is an empty string, consider it as zero.

function sumStr(a,b) {
  return `${Number(a) + Number(b)}`
}


console.log(sumStr("4", "5"));
// "9"

console.log(sumStr("34", "5"));
// "39"