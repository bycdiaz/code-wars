// Given an array arr, you have to return the amount of
// numbers that are smaller than arr[i] to the right.

function smallerThanCurrent(currentValue, currentIndex, array) {
  let numbersSmaller = 0;

  for (let i = currentIndex + 1; i < array.length; i++) {
    const currentToRight = array[i];
    
    if (currentValue > currentToRight) {
      numbersSmaller++;
    }
  }

  return numbersSmaller;
}

function smaller(nums) {
  return nums.map((currentNumber, index, array) => {
    return smallerThanCurrent(currentNumber, index, array);
  })
}

console.log(smaller([5, 4, 3, 2, 1]));
// [4, 3, 2, 1, 0]

console.log(smaller([1, 1, -1, 0, 0]));
// [3, 3, 0, 0, 0]