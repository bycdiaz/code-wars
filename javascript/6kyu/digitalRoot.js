// A digital root is the recursive sum of all the digits in a number. Given n,
// take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. This
// is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {
  let root = 0;
  while (n.toString().length > 1) {
    const numbers = [];
    n.toString()
      .split('')
      .forEach((element) => {
        numbers.push(Number(element));
      });

    n = numbers.reduce((acc, cur) => acc + cur, 0);
    if (n.toString().split('').length === 1) {
      root = n;
    }
  }

  return root;
}

console.log(digital_root(16));
// 7

console.log(digital_root(456));
// 6
