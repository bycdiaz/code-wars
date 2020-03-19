// Write a function that checks if all the letters in the second string are present
// in the first one at least once, regardless of how many times they appear:

// Function should not be case sensitive, as indicated in example #2. Note: both
// strings are presented as a single argument in the form of an array.

function letterCheck(arr) {
  const array1 = arr[0].toLowerCase().split('');
  const array2 = arr[1].toLowerCase().split('');
  const isTrue = (currentValue) => currentValue === true;
  const included = [];

  array2.forEach((element) => {
    if (array1.includes(element)) {
      included.push(true);
    } else {
      included.push(false);
    }
  });

  return included.every(isTrue);
}

console.log(letterCheck(['ab', 'aaa']));
// true

console.log(letterCheck(['trances', 'nectar']));
// true

console.log(letterCheck(['compadres', 'DRAPES']));
// true

console.log(letterCheck(['parses', 'parsecs']));
// false
