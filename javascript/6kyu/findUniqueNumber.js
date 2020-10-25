// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find.
// The numbers are always valid integer values between 1 and 2147483647, so no need for
// type and error checking. The array contains at least one number and may contain
// millions of numbers. So make sure your solution is optimized for speed.
// Example

// Input:

// [ 1, 8, 4, 4, 6, 1, 8 ]

// Expected output:

// 6

// Initial attempt works but is too slow.
// function findUnique(numbers) {
//   const sortedArr = numbers.sort((a, b) => a - b );

//   for (let i = 0; i < sortedArr.length; i += 1) {
//     if (sortedArr[i] !== sortedArr[i+1] && sortedArr[i] !== sortedArr[i-1]) {
//       return sortedArr[i];
//     }
//   }
// }

// Second Attempt, still too slow.
// function countElements(array) {
//   return array.reduce((count, number) => {
//     count[number] ? count[number]++ : count[number] = 1;

//     return count
//   }, {})
// }

// function findUnique(numbers) {
//   const numberCount = countElements(numbers);
//   for ([key, value] of Object.entries(numberCount)) {
//     if (value === 1) return Number(key);
//   }
// }

// Fast enough.
// function findUnique(numbers) {
//   const uniqueHolder = new Set();
  
//   for (number of numbers) {
//     uniqueHolder.has(number) ? uniqueHolder.delete(number) : uniqueHolder.add(number);
//   }

//   return uniqueHolder.values().next().value;
// }

// Using reduce
function findUnique(numbers) {
  return numbers.reduce((uniqueHolder, number) => {
    uniqueHolder.has(number) ? uniqueHolder.delete(number) : uniqueHolder.add(number);

    return uniqueHolder;
  }, new Set()).values().next().value;
}

console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));
// 6
