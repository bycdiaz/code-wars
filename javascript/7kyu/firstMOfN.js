// Implement a function, multiples(m, n), which returns an array of the first
// m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)

// should return

// [5.0, 10.0, 15.0]

function multiples(m, n) {
  const multiples = [n];

  for (let index = 0; index < m - 1; index += 1) {
    multiples.push(multiples[multiples.length - 1] + n)
  }

  return multiples;
}

console.log(multiples(3, 5));
// [5, 10, 15]