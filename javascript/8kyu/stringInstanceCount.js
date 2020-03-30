// Create a function called that accepts 2 string arguments and returns an integer of the
// count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
  let count = 0;
  str.split('').forEach((char) => {
    if (char === letter) {
      count += 1;
    }
  });
  return count;
}

console.log(strCount('Hello', 'o'));
// => 1

console.log(strCount('Hello', 'l'));
// => 2

console.log(strCount('', 'z'));
// => 0
