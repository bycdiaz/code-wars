/*
The task is to produce a string in which each lowercase
letters of s1 or s2 appears as many times as its
maximum if this maximum is strictly greater than 1;
these letters will be prefixed by the number of the
string where they appear with their maximum value and
:. If the maximum is in s1 as well as in s2 the prefix
is =:.
*/

function getMaxCountPerLetter(count1, count2) {
  const letters = [... new Set(Object.keys(count1).concat(Object.keys(count2)))];

  return letters.reduce((maxCounts, currentLetter) => {
    if (count1[currentLetter] > 1 || count2[currentLetter] > 1) {
      if (count1[currentLetter] > count2[currentLetter]) {
        maxCounts.push({
          string: 1,
          letter: currentLetter,
          count: count1[currentLetter]
        })
      } else if (count1[currentLetter] < count2[currentLetter]) {
        maxCounts.push({
          string: 2,
          letter: currentLetter,
          count: count2[currentLetter]
        })
      } else if (count1[currentLetter] === count2[currentLetter]) {
        maxCounts.push({
          string: '=',
          letter: currentLetter,
          count: count2[currentLetter]
        })
      }
    }

    return maxCounts.sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      } else {
        // TODO not sorting properly.
        return a.letter.localeCompare(b.letter);
      }
    });
  }, [])
}

function countLetters(letters) {
  return letters.reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;

    return count;
  }, {})
}

function getLowercasedLetters(string) {
  return string.split('').filter(letter => /[a-z]/.test(letter));
}

function createResultString(arrayOfMaxCountObjects) {
  const resultArray = [];

  for (const object of arrayOfMaxCountObjects) {
    resultArray.push(`${object.string}:${object.letter.repeat(object.count)}`);
  }

  return resultArray.join('/');
}

function mix(s1, s2) {
  const [s1Lowercase, s2Lowercase] = Object.values(arguments).map(string => {
    return getLowercasedLetters(string);
  })
  
  const [s1Count, s2Count] = [s1Lowercase, s2Lowercase].map(letters => {
    return countLetters(letters);
  });

  const maxCounts = getMaxCountPerLetter(s1Count, s2Count);

  return createResultString(maxCounts);
}

console.log(mix("Are they here", "yes, they are here"));
// "2:eeeee/2:yy/=:hh/=:rr"
