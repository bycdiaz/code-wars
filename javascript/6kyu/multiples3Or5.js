// If we list all the natural numbers below 10 that are multiples of
// 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the
// multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// initial solution
// function solution(number) {
//   const multiples3or5 = [];
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;

//   for (let i = 0; i < number; i += 1) {
//     const multipleOf3 = i % 3 === 0;
//     const multipleOf5 = i % 5 === 0;

//     if (multipleOf3 || multipleOf5) {
//       multiples3or5.push(i);
//     }
//   }
//   return multiples3or5.reduce(reducer, 0);
// }

// alternative solution
const multipleOfThreeOrFive = (number) => number % 3 === 0 || number % 5 === 0;
const sumOfRange = (acc, cur) => acc + cur;

function sumOfThreeOrFives(number) {
  const initialRange = [...Array(Math.abs(number)).keys()];

  return initialRange.filter(multipleOfThreeOrFive).reduce(sumOfRange, 0);
}

console.log(sumOfThreeOrFives(10));
