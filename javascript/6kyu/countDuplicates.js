/*
Write a function that will return the count of distinct
case-insensitive alphabetic characters and numeric
digits that occur more than once in the input string.
The input string can be assumed to contain only
alphabets (both uppercase and lowercase) and numeric
digits.
*/

function countElements(string) {
  return string.toLowerCase().split('').reduce((count, element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }

    return count;
  }, {})
}

function duplicateCount(string){
  const elementCount = countElements(string);
  const duplicateCount = Object.values(elementCount).reduce((duplicates, count) => {
    if (count > 1) duplicates++;

    return duplicates;
  }, 0);

  return duplicateCount;
}

console.log(duplicateCount(''));
// 0

console.log(duplicateCount("abcde"));
// 0

console.log(duplicateCount("aabbcde"));
// 2

console.log(duplicateCount("aabBcde"));
// 2

console.log(duplicateCount("Indivisibility"));
// 1

console.log(duplicateCount("Indivisibilities"));
// 2
