// Extend the Array prototype/class with a function to return all
// elements of that array, except the ones with the indexes
// passed in the parameter.

// The function should accept either an array or a single integer
// as parameters

Array.prototype.except = function(keys) {
  if (typeof keys === 'number') keys = [keys];
  
  return this.filter((_, index) => !keys.includes(index))
}

const array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.except([1,3]));
// ['a', 'c', 'e']

console.log(array.except(3));
// [ 'a', 'b', 'c', 'e' ]
