// Create a function that takes an argument n and sums even fibonacci numbers upto n's index in the fibonacci sequence.

// Example:

// sumFibs(5) === 2. (0, 1, 1, 2, 3, 5); 2 is the only number in the sequence and doesn't have another number in the
// sequence to get added to in the indexed fibbonacci sequence.

// Example:

// sumFibs(9) === 44. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34);
// 2 + 8 + 34 = 44;

function sumFibs(input) {
  const fibRange = [0, 1];
  const evenFibs = [];
  for (let i = 2; i < input + 1; i++) {
    fibRange.push(fibRange[i - 2] + fibRange[i - 1]);
  }

  fibRange.forEach((number) => {
    if (number % 2 === 0) {
      evenFibs.push(number);
    }
  });

  return evenFibs.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumFibs(5));
// 2

console.log(sumFibs(9));
// 44

console.log(sumFibs(10));
// 44

console.log(sumFibs(11));
// 44
