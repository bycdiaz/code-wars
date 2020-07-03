// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
// Note: the subarrays should be filled with 1s

function pyramid(n) {
  const pyramid = [];
  if (n == 0) return pyramid;

  for (let index = 0; index < n; index +=1 ) {
    const subArray = [];
    for (let i = 0; i < index + 1; i += 1) subArray.push(1);
    pyramid.push(subArray)
  }
  return pyramid;
}

console.log(pyramid(0));
// []

console.log(pyramid(1));
// [ [1] ]

console.log(pyramid(2));
// [ [1], [1, 1] ]

console.log(pyramid(3));
// [ [1], [1, 1], [1, 1, 1] ]
