// Write a function called that takes a string of parentheses, and determines if the order of the parentheses
// is valid. The function should return true if the string is valid, and false if it's invalid.

// initial solution
function validParentheses(parentheses) {
  const parenthesisTracker = [];
  const opposite = {
    '(': ')',
    ')': '('
  }

  for (parenthesis of parentheses) {
    if (parenthesisTracker.length === 0 && parenthesis === ')') return false;

    const lastParenthesis = parenthesisTracker[parenthesisTracker.length - 1];

    if (lastParenthesis === opposite[parenthesis]) {
      parenthesisTracker.pop();
    } else {
      parenthesisTracker.push(parenthesis);
    }
  }

  return parenthesisTracker.length === 0;
}

console.log(validParentheses('())(()'));
// false

// console.log(validParentheses(')()()()('));
// false

// console.log(validParentheses("()"));
// true

// console.log(validParentheses(")(()))"));
// false

// console.log(validParentheses("("));
// false

// console.log(validParentheses("(())((()())())"));
// true