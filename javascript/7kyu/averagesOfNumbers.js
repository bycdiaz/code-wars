// Write a method, that gets an array of integer-numbers and return
// an array of the averages of each integer-number and his follower,
// if there is one.

// If the array has 0 or 1 values or is null or None, your method
// should return an empty array.

function averages(array) {
  const averages = [];

  if (array === null || array.length <= 1) {
    return [];
  } else {
    for (let i = 0; i < array.length - 1; i += 1) {
      const adjacentAverage = (array[i] + array[i + 1]) / 2;
      averages.push((adjacentAverage))
    }
    return averages;
  }
}

console.log(averages([ 1, 3, 5, 1, -10]));
// [ 2, 4, 3, -4.5]

console.log(averages([5]));
// []