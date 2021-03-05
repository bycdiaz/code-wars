// Given an array of integers (x), and a target (t), you must find out
// if any two consecutive numbers in the array sum to t. If so, remove
// the second number.

function trouble(numbers, target){
  for (let index = 0; index < numbers.length; index++) {
    const consecutiveSum = numbers[index - 1] + numbers[index];

    if (consecutiveSum === target) {
      numbers.splice(index, 1);
      index--;
    }
    
  }

  return numbers;
}

console.log(trouble([4, 1, 1, 1, 4], 2));
// [4, 1, 4]

console.log(trouble([1, 3, 5, 6, 7, 4, 3],7));
// [1, 3, 5, 6, 7, 4]
