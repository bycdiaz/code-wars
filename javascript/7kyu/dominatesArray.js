// A zero-indexed array arr consisting of n integers is given. The dominator of array arr
// is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is
// more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of
// n integers, returns the dominator of arr. The function should return −1 if array does
// not have a dominator. All values in arr will be >=0.

// Initial Solution
// function dominator(arr) {
//   if (arr.length === 0) {
//     return -1;
//   } else {
//     const count = {};

//     arr.forEach((element) => {
//       if (element in count) {
//         count[element] += 1;
//       } else {
//         count[element] = 1;
//       }
//     })

//     let maxValues = [0, 0];
//     Object.keys(count).forEach(prop => {
//       if (count[prop] > maxValues[1]) {
//         maxValues = [prop, count[prop]]
//       }
//     })
//     if (maxValues[1] > arr.length / 2) {
//       return Number(maxValues[0]);
//     } else {
//       return -1;
//     }
//   }
// }

// Refactored
function dominator(arr) {
  if (arr.length === 0) -1;
  
  const count = {};

  arr.forEach((num) => { num in count ? count[num] += 1 : count[num] = 1 });

  let maxKeyValue = [0, 0];
  Object.keys(count).forEach(prop => {
    count[prop] > maxKeyValue[1] ? maxKeyValue = [prop, count[prop]] : null;
  });

  let vGreaterThanhalf = maxKeyValue[1] > arr.length / 2;
  return vGreaterThanhalf ? Number(maxKeyValue[0]) : -1;
}

console.log(dominator([3,4,3,2,3,1,3,3]));
// 3

console.log(dominator([]));
// -1