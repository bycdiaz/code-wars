// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s.

function onesComplement(number) {
  return number.toString().split('').reduce((newNumber, digit) => {
    return digit === '1' ? newNumber += '0' : newNumber += '1';
  }, '')
};

console.log(onesComplement(1001));
// 0110
