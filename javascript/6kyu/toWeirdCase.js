/*
Write a function toWeirdCase that accepts a string, and returns
the same string with all even indexed characters in each word
upper cased, and all odd indexed characters in each word lower
cased. The indexing just explained is zero based, so the
zero-ith index is even, therefore that character should be
upper cased.
*/

function toWeirdCase(string){
  return string.split(' ').map(word => {
    return word.split('').map((letter, index) => {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  }).join(' ')
}

console.log(toWeirdCase( "String" ));
// "StRiNg"

console.log(toWeirdCase( "Weird string case" ));
// "WeIrD StRiNg CaSe"
