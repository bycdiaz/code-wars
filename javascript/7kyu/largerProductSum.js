// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n
// largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

function sumOrProduct(array, n) {
  const sortedArray = array.sort((a, b) => a - b);
  const productOfSmallest = sortedArray.slice(0, n).reduce((product, currentValue) => product * currentValue);
  const sumOfLargest = sortedArray.slice(array.length - n).reduce((sum, currentValue) => sum + currentValue);

  if (sumOfLargest > productOfSmallest) {
    return 'sum';
  } else if (productOfSmallest > sumOfLargest) {
    return 'product';
  } else {
    return 'same';
  }
}

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3));
// "product"