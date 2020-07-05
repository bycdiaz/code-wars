// Your task is to return a number from a string.
// Details

// You will be given a string of numbers and letters mixed up, you have to return
// all the numbers in that string in the order they occur.

function FilterString(value) {
  const isNum = (element) => /[0-9]/.test(element);
  return Number(value.split('').filter(isNum).join(''));
}

console.log(FilterString("aa1bb2cc3dd"));
// 123

console.log(FilterString("a1b2c3"));
// 123

console.log(FilterString("123"));
// 123
