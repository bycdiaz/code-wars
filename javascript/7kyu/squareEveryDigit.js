// In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will
// come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
  const result = [];
  num.toString().split('').forEach((char) => {
    result.push((Number(char) ** 2).toString());
  });
  return Number(result.join(''));
}

console.log(squareDigits(9119));
// 811181
