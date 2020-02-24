// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let arraySum = array.reduce(reducer)

  return arraySum / array.length
}

console.log(find_average([1,1,1]));
// 1

console.log(find_average([1,2,3]));
// 2