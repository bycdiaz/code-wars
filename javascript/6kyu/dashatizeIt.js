/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before
and after each odd integer, but do not begin or end the
string with a dash mark. If n is negative, then the negative
sign should be removed.

If n is not an integer, return an empty value.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

const makeNegativesPositive = (num) => Math.abs(num);

const makeNumberIntoArrayOfDigits = (num) => num.toString().split('').map(element => Number(element));

function dashatize(num) {
  if (num < 0) num = makeNegativesPositive(num);
  if (isNaN(num)) return 'NaN';

  const digitsArray = makeNumberIntoArrayOfDigits(num);
  let dashedString = '';

  for (let index = 0; index < digitsArray.length; index++) {
    const currentNumber = digitsArray[index];
    const numberIsEven = currentNumber % 2 === 0;
    const lastInDashedString = dashedString[dashedString.length - 1];
    
    if (index === 0) {
      dashedString += currentNumber;
    } else {
      const lastAddedAndCurrentAreEven = numberIsEven && lastInDashedString % 2 === 0;
      
      lastAddedAndCurrentAreEven ? dashedString += currentNumber : dashedString += `-${currentNumber}`;
    }
  }

  return dashedString;
}

console.log(dashatize(NaN));

console.log(dashatize(5311));
// 5-3-1-1

console.log(dashatize(274));
// '2-7-4'

console.log(dashatize(6815));
// '68-1-5'
