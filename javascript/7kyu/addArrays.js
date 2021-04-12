/*
Create a function called addArrays() that combines two arrays
of equal length, summing each element of the first with the
corresponding element in the second, returning the "combined"
summed array. Raise an error if input arguments are not of
equal length.
*/

const checkArrayLengths = (arrayOne, arrayTwo) => arrayOne.length !== arrayTwo.length;

function addArrays(array1, array2) {
  const lengthsNotEqual = checkArrayLengths(array1, array2);
  if (lengthsNotEqual) throw new Error("Lengths don't match");
  const combinedArray = [];

  for (let index = 0; index < array1.length; index++) {
    const currentFromFirst = array1[index];
    const currentFromSecond = array2[index];

    combinedArray.push(currentFromFirst + currentFromSecond);
  }

  return combinedArray;
}

console.log(addArrays([1,2],[4,5]));
// [5,7]

console.log(addArrays(["a"],["b"]));
// ["ab"]
