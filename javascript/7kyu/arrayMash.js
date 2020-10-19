// Mash 2 arrays together so that the returning array has alternating
// elements of the 2 arrays . Both arrays will always be the same length.

// initial solution
function arrayMash (array1, array2) {
  const mashedArray = [];

  for (let index = 0; index < array1.length; index++) {
    mashedArray.push(array1[index], array2[index]);
  }

  return mashedArray;
}

// different approach
function arrayMash (array1, array2) {
  return array1.reduce((mashedArray, currentValue, index) => {
    mashedArray.push(currentValue, array2[index]);
    return mashedArray;
  }, []);
}

console.log(arrayMash([1,2,3], ['a','b','c']));
// [1, 'a', 2, 'b', 3, 'c']
