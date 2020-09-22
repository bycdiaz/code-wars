// In this Kata, you will sort elements in an array by decreasing frequency of elements.
// If two elements have the same frequency, sort them by increasing value.

// We sort by highest frequency to lowest frequency. If two elements have same
// frequency, we sort by increasing value

function count(array) {
  const frequencies = {};

  for (number of array) {
    frequencies[number] ? frequencies[number] += 1 : frequencies[number] = 1;
  }

  return frequencies;
}

function solve(array){
  const frequencies = count(array);
  const frequencyOrValue = (a, b) => frequencies[b] - frequencies[a] || a - b;

  return array.sort(frequencyOrValue);
}

console.log(solve([2,3,5,3,7,9,5,3,7]));
// [3,3,3,5,5,7,7,2,9]