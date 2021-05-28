/*
The goal of this Kata is to write a function that will receive an array of strings as
its single argument, then the strings are each processed and sorted
(in desending order) based on the length of the single longest sub-string of
contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings
may contain letters, numbers, special characters, uppercase, lowercase, whitespace,
and there may be (often will be) multiple sub-strings of contiguous vowels. We are
only interested in the single longest sub-string of vowels within each string, in the
input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of
contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of
contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length,
then the strings should remain in the order in which they were found in the orginal
array.
*/

function getContiguousVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let currentCount = 0;
  let maxCount = 0;
  for (const letter of string) {
    const letterIsVowel = vowels.includes(letter.toLowerCase());

    if (letterIsVowel) {
      currentCount++
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }

      currentCount = 0;
    }
  }

  if (currentCount > maxCount) {
    maxCount = currentCount;
  }

  return maxCount;
}

function getStringDetails(arrayOfStrings) {
  return arrayOfStrings.reduce((details, string, index) => {
    details.push({
      string,
      originalIndex: index,
      contiguousVowels: getContiguousVowels(string)
    })

    return details;
  }, [])
}

function sortByVowelsOrIndices(detailsObject) {
  return detailsObject.sort((a, b) => {
    if (a.contiguousVowels === b.contiguousVowels) {
      return a.originalIndex - b.originalIndex
    } else {
      return b.contiguousVowels - a.contiguousVowels;
    }
  })
}

function sortStringsByVowels(strings){
  const stringsDetails = getStringDetails(strings);
  const sortedByVowelsOrIndices = sortByVowelsOrIndices(stringsDetails);

  return sortedByVowelsOrIndices.map(details => details.string);
}

console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]));
// ["iiutrqy","uijijeoj","lkjlkjww2"]

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]));
// ["iiii","eee","aa","oo"]
