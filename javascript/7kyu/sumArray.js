// Your job is to add a method 'sum' to all array objects, which sums all
// the numbers in it. You should return 0 if the array is empty.

// For example:

// var arr = [1,2,3,4];
// arr.sum();  //returns 10

// var arr = [10, 28, 14, 33];
// arr.sum(); //returns 85

Array.prototype.sum = function () {
  const reducer = (acc, cur) => acc + cur;

  return this.reduce(reducer, 0);
};

console.log([1, 2, 3, 4].sum());
