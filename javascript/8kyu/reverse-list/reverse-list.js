// In this kata you will create a function that takes in a list and returns a
// list with the reverse order.
//
// Examples
// reverseList([1,2,3,4]) == [4,3,2,1]
// reverseList([3,1,5,4]) == [4,5,1,3]

// My initial solution
// function reverseList(list) {
//   let reversedList = list.reverse();
//   return reversedList;
// }

// // more concise solution
// function reverseList(list) {
//   return list.reverse();
// }

// // Arrow form

const reverseList = list => list.reverse();

console.log(reverseList([1,2,3,4]));
console.log(reverseList([3,1,5,4]));
