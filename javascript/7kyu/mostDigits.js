// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  let longestLength = 0;
  let longestNum = 0;
  array.forEach((number) => {
    const numLength = number.toString().split('').length;
    if (numLength > longestLength) {
      longestLength = numLength;
      longestNum = number;
    }
  });

  return longestNum;
}

console.log(findLongest([1, 10, 100]));
// 100

console.log(findLongest([9000, 8, 800]));
// 9000

console.log(findLongest([8, 900, 500]));
// 900