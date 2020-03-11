// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

const arr = (number) => {
  const array = [];
  for (let index = 0; index < number; index += 1) {
    array.push(index);
  }

  return array;
};


console.log(arr(5));
// [0,1,2,3,4]
