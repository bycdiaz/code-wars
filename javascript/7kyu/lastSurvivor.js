/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be
removed, in order, starting from the beginning of the
array. After each removal the size of the string decreases
(there is no empty space). Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'

*/

function lastSurvivor(letters, coordinates) {
  let lettersArray = letters.split('');
  let coordinatesIndex = 0;

  while (lettersArray.length > 1) {
    lettersArray.splice(coordinates[coordinatesIndex], 1);

    coordinatesIndex++;
  }

  return lettersArray[0];
}

console.log(lastSurvivor("zbk", [0, 1]));
// "b"
