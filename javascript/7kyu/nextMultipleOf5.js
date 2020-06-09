// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// with for loop
function roundToNext5(n){
  function loopUntilTarget(n) {
    for (let i = n; i < n + 5; i += 1) {
      if (i % 5 == 0) return i;
    }
  }

  return n % 5 == 0 ? n : loopUntilTarget(n);
}

// with while loop
function roundToNext5(n){
  if (n % 5 == 0) return n;
  while (n % 5 != 0) n += 1;
  return n;
}

console.log(roundToNext5(0));
// 0

console.log(roundToNext5(2));
// 5

console.log(roundToNext5(3));
// 5

console.log(roundToNext5(-5));
// -5

console.log(roundToNext5(-2));
// 0
