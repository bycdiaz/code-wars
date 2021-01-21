// Return the count of pairs that have consecutive numbers

function pairs(array){
  let count = 0;

  for (let index = 0; index < array.length; index += 2) {
    const withinOne = Math.abs((array[index] - array[index + 1])) === 1;
    
    if (withinOne) count++
  }

  return count;
};

console.log(pairs([1,2,5,8,-4,-3,7,6,5]));
//  3