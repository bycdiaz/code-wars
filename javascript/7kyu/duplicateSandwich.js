// In this kata you will be given a list consisting of
// unique elements except for one thing that appears
// twice.

// Your task is to output a list of everything
// inbetween both occurrences of this element in the
// list.

function getRepeatedIndices(array) {
  const elementIndices = {};

  for (let index = 0; index < array.length; index++) {
    const currentElement = array[index];

    if (elementIndices[currentElement]) {
      elementIndices[currentElement].push(index);
      
      return elementIndices[currentElement];
    } else {
      elementIndices[currentElement] = [index + 1];
    }
  }
}

function duplicateSandwich(a) {
  const [start, end] = getRepeatedIndices(a);

  return a.slice(start, end);
}

console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]));
// [2, 3, 4, 5, 6]

console.log(duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]));
// ["Hello", "Example", "hello"]

console.log(duplicateSandwich([0, 0]));
// []

console.log(duplicateSandwich([true, false, true]));
// [false]

console.log(duplicateSandwich("example"));
// "xampl"
