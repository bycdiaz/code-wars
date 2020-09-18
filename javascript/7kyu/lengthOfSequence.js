// As part of this Kata, you need to find the length of the sequence in an array,
// between the first and the second occurrence of a specified number.

// For example, for a given array arr

// [0, -3, 7, 4, 0, 3, 7, 9]

// Finding length between two 7s like

// lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)

// would return 5.

function lengthOfSequence(arr, n) {
  let start = null;
  let end = null;
  let nCount = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === n) nCount++;
    // If nCount goes beyond 2 early in the array, end the process.
    if (nCount > 2) return 0;

    if (arr[index] === n && start === null) {
      start = index;
    } else if (arr[index] === n && end === null) {
      end = index + 1;
    }
  }
  
  return nCount !== 2 ? 0 : arr.slice(start, end).length;
};

console.log(lengthOfSequence([1, 1], 1));
// 2

console.log(lengthOfSequence([1, 2, 3, 1], 1));
// 4

console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5));
// 5

console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7));
// 4