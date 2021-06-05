// In this Kata, you will be given an array of integers whose
// elements have both a negative and a positive value, except
// for one integer that is either only negative or only
// positive. Your task will be to find that integer.

// initial attempt
function solve(array){
  const numbersSet = new Set();

  for (const number of array) {
    if (number > 0) {
      if (numbersSet.has(-number)) {
        numbersSet.delete(-number);
      } else {
        numbersSet.add(number);
      }
    } else {
      if (numbersSet.has(Math.abs(number))) {
        numbersSet.delete(Math.abs(number));
      } else {
        numbersSet.add(number);
      }
    }
  }

  for (const number of numbersSet) {
    return number;
  }
};

console.log(solve([1,-1,2,-2,3]));
// 3

console.log(solve([-3,1,2,3,-1,-4,-2]));
// -4

console.log(solve([1,-1,2,-2,3,3]));
// 3
