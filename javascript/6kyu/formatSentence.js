// Complete the method so that it formats the words into a single comma separated value. The last word should
// be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a
// single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being
// passed into the method should result in an empty string being returned.

function formatWords(words){
  let result = '';

  if (words === null || words.length === 0 || words.includes(null)) {
    return ""
  }

  if (words.length === 1) {
    result = `${words[0]}`;
  } else {
    words = words.filter(value => value.length > 1);
    console.log(words);
    if (words.length === 1) {
      result = `${words[0]}`
    } else {
      const string = `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`;
      result = string.replace('  ', ' ')
    }
  }

  return result;
}

console.log(formatWords(['', '', 'three']));


// console.log(formatWords(['one', '', 'three']));
// 'one and three'

// console.log(formatWords(['ninja', 'samurai', 'ronin']));
// should return "ninja, samurai and ronin"

// console.log(formatWords(['ninja', '', 'ronin']));
// should return "ninja and ronin"

// console.log(formatWords([]));
// should return ""

