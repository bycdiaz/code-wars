/*
Complete function splitOddAndEven, accept a number n(n>0), return an array that
contains the continuous parts of odd or even digits.
*/

function getDigitDetails(number) {
  return number.toString().split('').reduce((details, digit) => {
    const digitDetails = {
      digit,
      isEven: digit % 2 === 0
    }

    details.push(digitDetails)

    return details;
  }, [])
}

function splitOddAndEven(number) {
  const digitsAndDetails = getDigitDetails(number);
  const groups = [];
  let currentGroup = [];

  for (const detail of digitsAndDetails) {
    if (currentGroup.length === 0) {
      currentGroup.push(detail);
      continue;
    }

    const lastInCurrentGroup = currentGroup[currentGroup.length - 1];

    if (lastInCurrentGroup.isEven === detail.isEven) {
      currentGroup.push(detail);
    } else {
      groups.push(currentGroup);
      currentGroup = [detail];
    }
  }

  groups.push(currentGroup);

  return groups.reduce((resultArray, group) => {
    const groupedDigits = group.reduce((grouped, detail) => {
      grouped += detail.digit;

      return grouped;
    }, '');

    resultArray.push(Number(groupedDigits));
    return resultArray;
  }, []);
}

console.log(splitOddAndEven(123));
// [1,2,3]

console.log(splitOddAndEven(223));
// [22,3]
