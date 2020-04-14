// You are given a function that should insert an asterisk (*) between every pair of even
// digits in the given input, and return it as a string. If the input is a sequence,
// concat the elements first as a string.
// Input

// The input can be an integer, a string of digits or a sequence containing integers only.
// Output

// Return a string.


function asteriscIt(input) {
  const result = [];
  const splitInput = [];
  if (typeof input === 'number') {
    input.toString().split('').forEach((element) => {
      splitInput.push(Number(element));
    });
  } else if (typeof input === 'string') {
    input.split('').forEach((element) => {
      splitInput.push(Number(element));
    });
  } else {
    input.forEach((number) => {
      if (number.toString().length > 1) {
        number.toString().split('').forEach((element) => {
          splitInput.push(Number(element));
        });
      } else {
        splitInput.push(number);
      }
    });
  }
  splitInput.forEach((number, index) => (number % 2 === 0 && splitInput[index + 1] % 2 === 0 ? result.push(number, '*') : result.push(number)));
  return result.join('');
}

console.log(asteriscIt(5312708));
// "531270*8"

console.log(asteriscIt('0000'));
// "0*0*0*0"

console.log(asteriscIt([1, 4, 64]));
// "14*6*4"
