// Write a function that accepts two square matrices (N x N two dimensional arrays),
// and return the sum of the two. Both matrices being passed into the function will
// be of size N x N (square), containing only integers.

function matrixAddition(firstMatrix, secondMatrix) {
  const summedMatrix = [];

  for (let outerIndex = 0; outerIndex < firstMatrix.length; outerIndex++) {
    const firstMatrixRow = firstMatrix[outerIndex];
    const secondMatrixRow = secondMatrix[outerIndex];
    const newRow = [];

    for (let innerIndex = 0; innerIndex < firstMatrixRow.length; innerIndex++) {
      const firstMatrixCurrent = firstMatrixRow[innerIndex];
      const secondMatrixCurrent = secondMatrixRow[innerIndex];

      newRow.push(firstMatrixCurrent + secondMatrixCurrent);
    }

    summedMatrix.push(newRow);
  }

  return summedMatrix;
}

const matrix1 = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 1, 1]
];
const matrix2 = [ 
  [2, 2, 1],
  [3, 2, 3],
  [1, 1, 3]
];

console.log(matrixAddition(matrix1, matrix2));
// [ [ 3, 4, 4 ], [ 6, 4, 4 ], [ 2, 2, 4 ] ]
