// You are going to be given an array of integers. Your job is to take that array and find an
// index N where the sum of the integers to the left of N is equal to the sum of the integers
// to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  for (let index = 0; index < arr.length; index += 1) {  
    const leftSum = arr.slice(0,index).reduce((acc, cur) => acc + cur, 0);
    const rightSum = arr.slice((index + 1)).reduce((acc, cur) => acc + cur, 0);
    if (leftSum === rightSum) return index;
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
// 3