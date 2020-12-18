// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form. 

function maxGap (numbers){
  let greatestDifference = 0;
  const sortedNumbers = numbers.sort((a, b) => b - a);

  for (let index = 0; index < numbers.length - 1; index++) {
    const currentDifference = sortedNumbers[index] - sortedNumbers[index + 1];

    if (currentDifference > greatestDifference) {
      greatestDifference = currentDifference;
    }
  }

  return greatestDifference;
}

console.log(maxGap([13,10,2,9,5]));
// 4
