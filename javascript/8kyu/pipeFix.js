/*
Given the a list of numbers, return the list so that
the values increment by 1 for each index up to th
maximum value.

Example
Input: 1,3,5,6,7,8
Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers){
  const fixedPipes = [numbers[0]];
  
  for (let index = 1; index < numbers.length; index++) {
    const currentPipe = numbers[index];
    const lastFixed = fixedPipes[fixedPipes.length - 1];

    if (lastFixed === (currentPipe - 1)) {
      fixedPipes.push(currentPipe);
    } else {
      fixedPipes.push(lastFixed + 1);
      index --;
    }
  }

  return fixedPipes;
}

console.log(pipeFix([1,3,5,6,7,8]));
// [1,2,3,4,5,6,7,8]