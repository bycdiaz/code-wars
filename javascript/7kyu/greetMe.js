// Write a method that takes one argument as name and then greets that name,
// capitalized and ends with an exclamation point.

function greet(name) {
  return `Hello ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`
};

console.log(greet('riley'));
// "riley" --> "Hello Riley!"

console.log(greet('JACK'));
// "JACK"  --> "Hello Jack!"