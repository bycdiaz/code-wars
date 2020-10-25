// Complete the solution so that it returns true if it contains any
// duplicate argument values. Any number of arguments may be passed
// into the function.

// The array values passed in will only be strings or numbers. The
// only valid return values are true and false.

// initial solution
// function solution(...args){
//   const count = {};
//   const moreThanOne = (value) => value > 1;
  
//   args.forEach(arg => {count[arg] ? count[arg] += 1 : count[arg] = 1})
//   return Object.values(count).some(moreThanOne);
// }

// different approach
function solution(...args){
  const numberOfArguments = args.length;
  const numberOfUniqueArguments = new Set(args).size;
  
  return numberOfArguments !== numberOfUniqueArguments
}

console.log(solution(1, 2, 3));
// false

console.log(solution(1, 2, 3, 2));
// true

console.log(solution('1', '2', '3', '2'));
// true