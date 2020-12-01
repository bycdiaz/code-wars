// Balanced number is the number that * The sum of all digits
// to the left of the middle digit(s) and the sum of all
// digits to the right of the middle digit(s) are equal*.

// Given a number, Find if it is Balanced or not . 

function balancedNum(number) {
  if (number < 100) return "Balanced";

  let leftNumbers = 0;
  let rightNumbers = 0;
  const numberAsString = number.toString();
  
  if (numberAsString.length % 2 === 0) {
    leftNumbers = numberAsString.slice(0, (numberAsString.length / 2) - 1).split('');
    rightNumbers = numberAsString.slice((numberAsString.length / 2) + 1).split('');
  } else {
    leftNumbers = numberAsString.slice(0, (numberAsString.length / 2)).split('');
    rightNumbers = numberAsString.slice(((numberAsString.length / 2) + 1)).split('');
  }

  const add = (sum, number) => sum + Number(number);
  const balanced = leftNumbers.reduce(add, 0) === rightNumbers.reduce(add, 0);

  return balanced ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(959));
// "Balanced"

// console.log(balancedNum(7));
// "Balanced"

// console.log(balancedNum(13));
// "Balanced"

// console.log(balancedNum(56239814));
// "Balanced"

// console.log(balancedNum(295591));
// "Not Balanced"
