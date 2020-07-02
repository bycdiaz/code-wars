// Find the last element of the given argument(s).

function last(){
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

console.log(last([1, 2, 3, 4]));
// =>  4

console.log(last("xyz"));
// "z"

console.log(last(1, 2, 3, 4));
// =>  4