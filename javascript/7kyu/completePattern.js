// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

//     Note: Returning the pattern is not the same as Printing the pattern.

// Rules/Note:

//     If n < 1 then it should return "" i.e. empty string.
//     There are no whitespaces in the pattern.

// Pattern:

// (n)(n-1)(n-2)...4321
// (n)(n-1)(n-2)...432
// (n)(n-1)(n-2)...43
// (n)(n-1)(n-2)...4
// ...............
// ..............
// (n)(n-1)(n-2)
// (n)(n-1)
// (n)

// Examples:

//     pattern(4):

//     4321
//     432
//     43
//     4

function pattern(n){
  if (n === 1) return n;
  const initialSequence = [];
  let result = '';
  
  for (let index = n; index > 0; index -= 1) {
    initialSequence.push(index);
  }

  while (initialSequence.length > 0) {
    if (initialSequence.length === 1) {
      result += `${initialSequence.join('')}`;
      initialSequence.pop();
    } else {
      result += `${initialSequence.join('')}\n`;
      initialSequence.pop();
    }
  }

  return result;
}

// console.log(pattern(1));
// "1"

// console.log(pattern(2));
// "21\n2"

console.log(pattern(4));
// "54321\n5432\n543\n54\n5"