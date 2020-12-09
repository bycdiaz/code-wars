// Complete the function that takes a list of numbers (nums),
// as the only argument to the function. Take each number in
// the list and square it if it is even, or square root the
// number if it is odd. Take this new list and return the sum
// of it, rounded to two decimal places.

// The list will never be empty and will only contain values
// that are greater than or equal to zero.

function sumSquareEvenRootOdd (numbers) {
  const computedNumbers = numbers.map(number => {
    return number % 2 === 0 ? number * number : Math.sqrt(number);
  });
  const sumNumbers = (sum, number) => sum + number;

  return Number(computedNumbers.reduce(sumNumbers, 0).toFixed(2));
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]));
// 91.61
