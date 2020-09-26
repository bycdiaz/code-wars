// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.



function sumNumbers(array) {
  const sum = (total, current) => total + current;
  return array.reduce(sum);
}

function repeats(array){
  const singles = new Set();

  for (number of array) {
    singles.has(number) ? singles.delete(number) : singles.add(number);
  }

  return sumNumbers([...singles]);
};

console.log(repeats([4,5,7,5,4,8]));
// 15, sum of 7 & 8
