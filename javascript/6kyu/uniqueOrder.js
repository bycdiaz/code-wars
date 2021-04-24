/*
Implement the function unique_in_order which takes as
argument a sequence and returns a list of items
without any elements with the same value next to each
other and preserving the original order of elements.
*/

function uniqueInOrder(iterable){
  const unique = [];
  
  for (const element of iterable) {
    let lastUnique = unique[unique.length - 1];
    
    if (lastUnique !== element) unique.push(element);
  }

  return unique;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// ['A','B','C','D','A','B']
