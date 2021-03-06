/*
Given a list lst and a number N, create a new list that contains each
number of lst at most N times without reordering. For example if
N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop
the next [1,2] since this would lead to 1 and 2 being in the result 3
times, and then take 3, which leads to [1,2,3,1,2,3].
*/

function deleteNth(arrayOfNumbers, cap){
  const instances = {};

  return arrayOfNumbers.filter(number => {
    instances[number] ? instances[number]++ : instances[number] = 1;

    return instances[number] <= cap;
  })
  // const resultArray = [];

  // for (const number of arrayOfNumbers) {
  //   instances[number] ? instances[number]++ : instances[number] = 1;

  //   if (instances[number] <= cap) resultArray.push(number);
  // }

  // return resultArray;
}

console.log(deleteNth([20,37,20,21], 1));
// [20,37,21]

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
// [1, 1, 3, 3, 7, 2, 2, 2]
