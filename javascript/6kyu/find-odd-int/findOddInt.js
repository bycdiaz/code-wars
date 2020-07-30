function findOdd(array) {
  const oddNum = new Set();
  
  for (const num of array) {
    oddNum.has(num) ? oddNum.delete(num) : oddNum.add(num);
  }

  return oddNum.values().next().value;
}

module.exports = findOdd;