// Given two arrays of strings, return the number of times each
// string of the second array appears in the first array.

function solve(a,b){
  const counts = [];
  
  for (outerString of b) {
    let currentCount = 0;

    for (innerString of a) {
      if (outerString === innerString) {
        currentCount++
      }
    }

    counts.push(currentCount);
  }

  return counts;
}

console.log(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']));
// [2, 1, 0]
