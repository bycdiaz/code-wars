/*
Write a function that counts the number of sections repeating the same word (case insensitive).
The occurence of two or more equal words next after each other counts as one.

Examples

"dog cat"                  -->  0
"dog DOG cat"              -->  1
*/

function countAdjacentPairs(searchString) {
  const wordsArray = searchString.toLowerCase().split(' ');
  let repeatedSections = 0;
  let currentSection = [];

  for (const currentWord of wordsArray) {
    if (currentSection.length === 0) {
      currentSection.push(currentWord);
      continue;      
    }

    const lastOfCurrentSection = currentSection[currentSection.length - 1];

    if (lastOfCurrentSection === currentWord) {
      currentSection.push(currentWord);
    } else {
      if (currentSection.length >= 2) {
        repeatedSections++;
      }

      currentSection = [currentWord];
    }
  }

  if (currentSection.length >= 2) {
    repeatedSections++;
  }

  return repeatedSections;
}

console.log(countAdjacentPairs("dog cat"));
// 0

console.log(countAdjacentPairs("dog DOG cat"));
//  1

console.log(countAdjacentPairs("cat cat dog dog cat cat"));  
// 3

// "apple dog cat"            -->  0
// "pineapple apple dog cat"  -->  0
// "apple     apple dog cat"  -->  1
// "apple dog apple dog cat"  -->  0
// "dog dog DOG dog dog dog"  -->  1
// "dog dog dog dog cat cat"  -->  2

