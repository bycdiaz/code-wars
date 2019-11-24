// Mr. Square is going on a holiday. He wants to bring 2 of his favorite squares with him, so he put them in his rectangle suitcase.

// Write a function that, given the size of the squares and the suitcase, return whether the squares can fit inside the suitcase.

// fit_in(a,b,m,n)
// a,b are the sizes of the squares
// m,n are the sizes of the suitcase

function fit_in(a, b, m, n) {
  let maxSquares = a + b
  let minSquares = Math.max(a,b)
  let maxCase = Math.max(m,n)
  let minCase = Math.min(m,n)

  return maxSquares > maxCase || minSquares > minCase ? false : true
}


console.log(fit_in(1,2,3,2));
// True

// fit_in(1,2,2,1)
// False

// fit_in(3,2,3,2)
// False

// fit_in(1,2,1,2)
// False