// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = function (arr) {
  const newArray = [];
  const zeros = [];
  arr.forEach(item => {
    item === 0 ? zeros.push(item) : newArray.push(item);
  });

  return newArray.concat(zeros);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
// returns[false,1,1,2,1,3,"a",0,0]