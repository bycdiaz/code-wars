// Write a function called appendArrays that appends the items from array 2 onto array 1, returning the newly formed array.

// For example if your 2 arrays were:

// var array1 = [a,b,c]
// var array2 = [1,2,3]

// After using your appendArrays function, the result should be [a,b,c,1,2,3]

function appendArrays (arr1, arr2) {
  return arr1.concat(arr2)
}

console.log(appendArrays([1,2], [2,4]));
// [1,2,2,4]