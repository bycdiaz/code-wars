// You are required to create a simple calculator that returns
// the result of addition, subtraction, multiplication or
// division of two numbers.

// Your function will accept three arguments:
// The first and second argument will be numbers.
// The third argument will represent a sign indicating the
// operation to perform on these two numbers.
// Example:


// if the variables are not numbers or the sign does not belong
// to the list above a message "unknown value" must be returned.

function calculator(a, b, sign) {
  const signs = ['+', '-', '*', '/'];
  const validArgs = Number.isInteger(a) && Number.isInteger(b) && signs.includes(sign);
  let result = null;

  if (validArgs) {
    if (sign === '+') {
      result = a + b;
    } else if (sign === '-') {
      result = a - b;
    } else if (sign === '*') {
      result = a * b;
    } else if (sign === '/') {
      result = a / b;
    }
  } else {
    result = 'unknown value';
  }
  return result;
}

// console.log(calculator(1, 2, '&'));
// result will be "unknown value"

// console.log(calculator(1, 'k', '*'));
// result will be "unknown value"

console.log(calculator(1, 2, '+'));
// result will be 3
