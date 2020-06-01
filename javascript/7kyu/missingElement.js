// Write a function called getMissingElement that accepts an array of
// unique integers between 0 and 9 (inclusive), and returns the missing element.

function getMissingElement(array){
  const sorted = array.sort((a, b) => a - b);
  for (let i = 0; i < 10; i += 1) if (sorted[i] !== i) return i;
}

console.log(getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ));
// returns 8

console.log(getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ));
// returns 3