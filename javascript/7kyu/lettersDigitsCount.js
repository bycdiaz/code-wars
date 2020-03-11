// Create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
  let count = 0;

  input.split("").forEach(element => {
    /[0-9A-Za-z]/.test(element) ? count++ : null;
  });
  return count;
}

console.log(countLettersAndDigits("hel2!lo"));
// 6