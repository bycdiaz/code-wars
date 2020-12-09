// An element in an array is dominant if it is greater than
// all elements to its right. You will be given an array
// and your task will be to return a list of all dominant
// elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are
// greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All
// numbers will be greater than 0.

function solve(array){
  return array.reduce((dominantNumbers, currentNumber, index) => {
    const numbersToRight = array.slice(index + 1);
    const biggerThanAll = numbersToRight.every(number => currentNumber > number);

    if (biggerThanAll) dominantNumbers.push(currentNumber);

    return dominantNumbers;
  }, []);
};

console.log(solve([5,4,3,2,1]));
// [5,4,3,2,1]

console.log(solve([1,21,4,7,5]));
// [21,7,5]
