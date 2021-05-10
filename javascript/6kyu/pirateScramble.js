/*
Pirates have notorious difficulty with enunciating. They tend to blur
all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are
saying.

Write a function that will accept a jumble of letters as well as a
dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )

Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an
empty array if there are no matches.
*/

function getLetterCount(word) {
  return word.split('').reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;

    return count;
  }, {})
}

function getIndexOfWords(anagramCount, dictionaryCounts) {
  const indices = [];

  dictionaryCounts.forEach((lettersCount, index) => {
    const allKeysValuesMatch = Object.entries(lettersCount).every(([key, value]) => {
      return anagramCount[key] === value;
    })
    
    if (allKeysValuesMatch) indices.push(index);
  })

  return indices;
}

function grabscrab(anagram, dictionary) {
  const anagramLetterCount = getLetterCount(anagram);
  const dictionaryLetterCounts = dictionary.reduce((counts, word) => {
    counts.push(getLetterCount(word));

    return counts;
  }, [])
  
  const indicesOfTargetWords = getIndexOfWords(anagramLetterCount, dictionaryLetterCounts);

  return indicesOfTargetWords.reduce((words, index) => {
    words.push(dictionary[index]);

    return words;
  }, [])
}

console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]));
// ["sport", "ports"]
