/* Given an array/list [] of integers , Find all the LEADERS in the array.
An element is leader if it is greater than The Sum all the elements to
its right side.
*/

function arrayLeaders(numbers) {
  const leaders = [];

  for (let index = 0; index <= numbers.length - 1; index++) {
    const currentNumber = numbers[index];
    const numbersToRight = numbers.slice(index + 1);
    const sum = (acc, cur) => acc + cur;
    const currentGreaterThanAllToRight = currentNumber > numbersToRight.reduce(sum, 0);

    if (currentGreaterThanAllToRight) {
      leaders.push(currentNumber);
    }
  }

  return leaders;
}

console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
// [17, 5, 2]

console.log(arrayLeaders ([1, 2, 3, 4, 0]));
// [4]