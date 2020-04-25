// Your task is to write a function, which takes two arguments and returns a sequence.
// First argument is a sequence of values, second is multiplier. The function should
// filter all non-numeric values and multiply the rest by given multiplier.

function multiplyAndFilter(array, multiplier) {
  const multiplied = [];

  array.forEach((element) => {
    typeof element === "number" ? multiplied.push(element * multiplier) : null;
  });

  return multiplied;
}

console.log(multiplyAndFilter([1, 2, 3, 4], 1.5));
// [1.5, 3, 4.5, 6]

// console.log(multiplyAndFilter([1, 2, 3], 0));
// [0, 0, 0]

// console.log(multiplyAndFilter([0, 0, 0], 2));
// [0, 0, 0]

// console.log(
//   multiplyAndFilter(
//     [1, null, function () {}, 2.5, "string", 10, undefined, {}, []],
//     3
//   )
// );
// [3, 7.5, 30];
