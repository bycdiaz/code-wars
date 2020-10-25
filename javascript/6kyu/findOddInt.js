// Given an array of integers, find the one that appears an odd number of times.

// initial solution
function findOdd(array) {
  const count = {};
  let oddAppearance = 0;

  array.map((number) => (number in count ? count[number] += 1 : count[number] = 1));

  Object.keys(count).forEach((element) => {
    count[element] % 2 === 1 ? oddAppearance = Number(element) : null;
  });

  return oddAppearance;
}

function findOdd(array) {
  const oddNum = new Set();
  
  for (num of array) {
    oddNum.has(num) ? oddNum.delete(num) : oddNum.add(num);
  }

  return oddNum.values().next().value;
}