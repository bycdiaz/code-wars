// Complete the function that takes two integers (a, b, where a > b) and return an array of
// all integers between the input parameters, including them.

function between(a, b) {
  const range = [];

  for (let index = a; index <= b; index += 1) {
    range.push(index);
  }
  return range;
}

console.log(between(1, 4));
// [1, 2, 3, 4]
