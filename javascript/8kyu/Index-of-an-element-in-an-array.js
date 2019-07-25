// Provided is a function find which accepts two parameters in the following order: 
// array, element and returns the index of the element if found and "Not found" 
// otherwise. Your task is to shorten the code as much as possible in order to meet 
// the strict character count requirements of the Kata. You may assume that all 
// array elements are unique.

// my initial solution - works, but too many characters.
// function find(array, element) {
//   if (array.includes(element)) {
//     return array.indexOf(element)
//   } else{
//     return "Not found"
//   }
// }

// refactored

function find(a,e) {
  return (a.includes(e) ? a.indexOf(e) : "Not found");
}