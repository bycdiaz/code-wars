// Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

function sumR(x) {
  if (x.length == 0) {
    return 0
  } else {
    return x[0] + sumR(x.slice(1));
  }
}

// console.log(sumR([]));
// 0

// console.log(sumR([1]));
// 1

console.log(sumR([1,1,1]));
// 3