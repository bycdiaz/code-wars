// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(array) {
  const count = {};
  let oddAppearance = 0;

  array.forEach((number) => {
    if (number in count) {
      count[number] += 1;
    } else {
      count[number] = 1;
    }
  });

  Object.keys(count).forEach((element) => {
    if (count[element] % 2 === 1) {
      oddAppearance = Number(element);
    }
  });

  return oddAppearance;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// 5
