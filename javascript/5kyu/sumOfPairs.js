// Given a list of integers and a single sum value, return the first two values
// (parse from the left please) in order of appearance that add up to form the sum.

function sumPairs(ints, s){
  const intsSet = new Set();

  for (let index = 0; index < ints.length; index += 1) {
    const currentElement = ints[index];
    const matchingValue = s - currentElement;
    if (intsSet.has(matchingValue)) return [matchingValue, ints[index]];
    intsSet.add(currentElement);
  }
  
  return undefined;
}

console.log(sumPairs([11, 3, 7, 5],10));
// 3 + 7 = 10
// [3, 7]