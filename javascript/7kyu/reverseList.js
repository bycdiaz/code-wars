// Write a function reverse which reverses a list
// (or in clojure's case, any list-like data structure)

function reverse(array) {
  const reversed = [];
  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversed.push(array[index]);
  }
  return reversed;
}

console.log(reverse([1, 2, 3]));
// [3, 2, 1]

console.log(reverse([1, null, 14, 'two']));
// ['two', 14, null, 1]
