// Write a function that takes an array/list of numbers and returns a number.

function EvenOdd(arr){
  return arr.reduce((acc, cur, index) => {
    return index % 2 === 0 ? acc + cur : acc * cur
  })
}

console.log(EvenOdd([1,2,6,1,6,3,1,9,6]));
// 393

// EvenOdd([1,2,3]) => 5
// EvenOdd([0,2,3]) => 3
// EvenOdd([1,0,3]) => 3
// EvenOdd([3,2])   => 6