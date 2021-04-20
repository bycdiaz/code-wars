/*
Given two arrays a and b write a function comp(a, b)
(orcompSame(a, b)) that checks whether the two
arrays have the "same" elements, with the same
multiplicities. "Same" means, here, that the elements
in b are the elements in a squared, regardless of
the order.
*/

const squareElements = (array) => array.map(number  => number * number);
const leastToGreatest = (a, b) => a - b;

function comp(array1, array2){
  if (!array1 || !array2) return false;
  
  const elementsSquared = squareElements(array1).sort(leastToGreatest);
  const array2Sorted = array2.sort(leastToGreatest);

  return elementsSquared.every((number, index) => number === array2Sorted[index]);
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]));
// true

console.log(comp(
  [ 121, 144, 19, 161, 19, 144, 19, 11 ],
  [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ]));
// false
