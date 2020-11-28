// Given an array of positive integers (the weights of the people),
// return a new array/tuple of two integers, where the first one is
// the total weight of team 1, and the second one is the total
// weight of team 2.

function rowWeights(array){
  let teamOneWeight = 0;
  let teamTwoWeight = 0;

  for (let index = 0; index < array.length; index++) {
    const indexIsEven = index % 2 === 0;
    const currentPersonWeight = array[index];
    indexIsEven ? teamOneWeight += currentPersonWeight : teamTwoWeight += currentPersonWeight;
  }

  return [teamOneWeight, teamTwoWeight]
}

console.log(rowWeights([80]));
// [80,0]

console.log(rowWeights([100,50]));
// [100,50]

console.log(rowWeights([50,60,70,80]));
// [120,140]