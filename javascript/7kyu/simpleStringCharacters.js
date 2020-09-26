// In this Kata, you will be given a string and your task will be to return a list
// of ints detailing the count of uppercase letters, lowercase, numbers and
// special characters, as follows.

function solve(string){
  const isUppercaseLetter = /[A-Z]/;
  const isLowercaseLetter = /[a-z]/;
  const isNumber = /[0-9]/;
  const isSpecialChar = /[^A-z0-9]/;
  const counts = {
    uppercaseCount: 0,
    lowercaseCount: 0,
    numberCount: 0,
    specialCharCount: 0
  };

  for (character of string) {
    if (isUppercaseLetter.test(character)) counts.uppercaseCount += 1;

    if (isLowercaseLetter.test(character)) counts.lowercaseCount += 1;

    if (isNumber.test(character)) counts.numberCount += 1;

    if (isSpecialChar.test(character)) counts.specialCharCount += 1;
  }

  return Object.values(counts);
}

console.log(solve("*'&ABCDabcde12345"));
// [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.