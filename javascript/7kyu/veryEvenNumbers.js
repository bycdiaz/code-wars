// Write a function that returns true if the number is a "Very Even" number.

// If a number is a single digit, then it is simply "Very Even" if it itself is even.

// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

// Note: The numbers will always be positive!

// initial solution
// function isVeryEvenNumber(n) {
//   let digits = n
//     .toString()
//     .split("")
//     .map((char) => Number(char));
//   let veryEven = null;

//   if (digits.length === 1) {
//     n % 2 === 0 ? (veryEven = true) : (veryEven = false);
//   } else {
//     while (digits.length > 1) {
//       digits = digits.reduce((acc, cur) => acc + cur, 0);
//       if (digits.toString().length === 1) {
//         digits % 2 === 0 ? (veryEven = true) : (veryEven = false);
//       } else {
//         digits = digits
//           .toString()
//           .split("")
//           .map((char) => Number(char));
//       }
//     }
//   }

//   return veryEven;
// }

// refactor
function isVeryEvenNumber(n) {
  let digits = n
    .toString()
    .split("")
    .map((char) => Number(char));

  if (digits.length === 1) {
    return n % 2 === 0;
  } else {
    while (digits.length > 1) {
      digits = digits.reduce((acc, cur) => acc + cur, 0);
      return digits.toString().length === 1
        ? digits % 2 === 0
        : isVeryEvenNumber(digits);
    }
  }
}

console.log(isVeryEvenNumber(222));
// => returns true

// console.log(isVeryEvenNumber(841));
// => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even

// console.log(isVeryEvenNumber(5));
// => returns false

// console.log(isVeryEvenNumber(6));
// => returns true

// console.log(isVeryEvenNumber(88));
// => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd
