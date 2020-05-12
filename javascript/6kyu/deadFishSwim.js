// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.



// Return the output array, and ignore all non-op characters
function parse(data) {
  const valueArray = [];
  let value = 0;

  data.split('').forEach(element => {
    if (element === 'i') {
      value += 1;
    } else if (element === 'd') {
      value -= 1;
    } else if (element === 's') {
      value = value ** 2;
    } else if (element === 'o') {
      valueArray.push(value)
    }
  });
  return valueArray;
}

console.log(parse("iiisdoso"));
// [ 8, 64 ]