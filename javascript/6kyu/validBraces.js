// Write a function that takes a string of braces, and
// determines if the order of the braces is valid. It
// should return true if the string is valid, and
// false if it's invalid.

const compliments = {
  '(': ')',
  ')': '(',
  '[': ']',
  ']': '[',
  '{': '}',
  '}': '{'  
};

const closingBraces = [')', ']', '}'];

function validBraces(braces){
  const braceStack = [braces[0]];

  for (let index = 1; index < braces.length; index++) {
    const currentBrace = braces[index];
    
    if (braceStack.length === 0 && closingBraces.includes(currentBrace)) {
      return false;
    }

    const lastBrace = braceStack[braceStack.length - 1];

    if (lastBrace === compliments[currentBrace]) {
      braceStack.pop();
    } else {
      braceStack.push(currentBrace);
    }
  }

  console.log(braceStack);
  return braceStack.length === 0;
}

console.log(validBraces("())({}}{()][]["));
// false

// console.log(validBraces("()"));
// true

// console.log(validBraces("(){}[]"));
// true

// console.log(validBraces("[(])"));
// false

// console.log(validBraces("[({})](]"));
// false
