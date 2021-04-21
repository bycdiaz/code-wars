/*
There is an array with some numbers.
All numbers are equal except for one. Try to find it!
*/

function countOccurances(array) {
  return array.reduce((count, current) => {
    count[current] ? count[current]++ : count[current] = 1;

    return count;
  }, {})
}

function findUniq(arr) {
  const numbersCount = Object.entries(countOccurances(arr));
  
  for (const entry of numbersCount) {
    const [key, value] = entry;

    if (value === 1) return Number(key);
  }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
// 2

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
// 0.55
