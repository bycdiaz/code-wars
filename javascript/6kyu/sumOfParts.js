// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []

// The corresponding sums are (put together in a list):
// [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will
// take as parameter a list ls and return a list of the sums of its parts 
// as defined above.

// initial approach
// works but times out since sum is recalculated in each pass
// function partsSums(ls) {
//   const sumNumbers = (sum, number) => sum += number;
//   const sums = [];

//   for (let index = 0; index < ls.length + 1; index++) {
//     const sectionSum = ls.slice(index).reduce(sumNumbers, 0);

//     sums.push(sectionSum)
//   }

//   return sums;
// }

// faster approach
// function partsSums(ls) {
//   const sumNumbers = (sum, number) => sum += number;
//   const fullArraySum = ls.reduce(sumNumbers, 0);
//   const listOfSums = [fullArraySum];


//   for (let index = 0; index < ls.length; index++) {
//     const lastSum = listOfSums[listOfSums.length - 1];
//     const currentValue = ls[index];
    
//     listOfSums.push(lastSum - currentValue);
//   }

//   return listOfSums;
// }

// using reduce
function partsSums(ls) {
  const fullArraySum = ls.reduce((sum, number) => sum += number, 0);
  const listOfSums = [fullArraySum];

  return ls.reduce((sumList, currentNumber) => {
    const lastSum = listOfSums[listOfSums.length - 1];
    
    sumList.push(lastSum - currentNumber);
  
    return sumList
  }, listOfSums)
}

console.log(partsSums([0, 1, 3, 6, 10]));
// [20, 20, 19, 16, 10, 0]