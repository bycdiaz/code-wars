// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments.
// But be careful, some of your arguments can be arrays of numbers or nested arrays.

function smartSum(...args){
  function flatten(...args) {
    const flattened = [];
  
    args.forEach(element => {
      if (Array.isArray(element)) {
        flatten(...element).forEach(el => flattened.push(el));
      } else {
        flattened.push(element);
      }
    })
    return flattened;
  }

  return flatten(args).reduce((a, b) => a + b);
}

console.log(smartSum(1,2,3,[4,5],6));
// returns 21

console.log(smartSum(1,2,[[3,4],5],6));
// returns 21

