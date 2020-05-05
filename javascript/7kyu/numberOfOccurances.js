// Write a functionthat returns the number of occurrences of an element in an array.
// Examples

// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

Array.prototype.numberOfOccurrences = function(element) {
  let counter = 0;
  for (let index = 0; index < this.length; index += 1) {
    this[index] === element ? counter++ : null;
  }
  
  return counter;
}

