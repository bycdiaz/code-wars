// At the annual family gathering, the family likes to find the oldest living
// family member’s age and the youngest family member’s age and calculate the
// difference between them.

// You will be given an array of all the family members' ages, in any order.
// The ages will be given in whole numbers, so a baby of 5 months, will have
// an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age,
//   difference between the youngest and oldest age].

function differenceInAges(ages) {
  const compare = (a, b) => a - b;
  const sortedAges = ages.sort(compare);
  const youngest = sortedAges[0];
  const oldest = sortedAges[sortedAges.length - 1];
  const ageDifference = oldest - youngest;
  const result = [];

  result.push(youngest);
  result.push(oldest);
  result.push(ageDifference);

  return result;
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
// [6, 82, 76]

console.log(differenceInAges([57, 99, 14, 32]));
// [14, 99, 85]
