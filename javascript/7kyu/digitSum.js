// So, your task is to sum up all the digits in string, possibly multiple times,
// till you get a one digit result. You should then return it as a string. The
// input will be always valid.

// For example:

// const str = '1234';
// digitSum(str);  //returns 1

// 1 + 2 + 3 + 4 = 10 <= this result doesn't have one digit => 1 + 0 = 1

function sumDigits(string) {
  return string.split('').reduce((sum, number) => {
    return sum += Number(number);
  }, 0)
}

function digitSum(str) {

  while (str.length > 1) {
    str = sumDigits(str).toString();
  }

  return str;
}

console.log(digitSum('1234'));
// '1'
