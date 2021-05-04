/*
Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.
Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
returns "(123) 456-7890"
*/

function createPhoneNumber(numbers){
  const parts = {
    first: '',
    second: '',
    third: ''
  }

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];

    if (index < 3) {
      parts.first += currentNumber;
      continue;
    }

    if (index < 6) {
      parts.second += currentNumber;
      continue;
    }
    
    if (index > 5) {
      parts.third += currentNumber;
    }
  }

  return `(${parts.first}) ${parts.second}-${parts.third}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// "(123) 456-7890"
