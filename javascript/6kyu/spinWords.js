// Write a function that takes in a string of one or more words, and returns the same
// string, but with all five or more letter words reversed (Just like the name of
//   this Kata). Strings passed in will consist of only letters and spaces. Spaces
//   will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test" spinWords( "This is
// another test" )=> returns "This is rehtona test"

function reverse(wordAsArray) {
  let leftIndex = 0;
  let rightIndex = wordAsArray.length - 1;

  while (leftIndex < rightIndex) {
    const tempLeft = wordAsArray[leftIndex];
    wordAsArray[leftIndex] = wordAsArray[rightIndex];
    wordAsArray[rightIndex] = tempLeft;

    leftIndex++;
    rightIndex--;
  }

  return wordAsArray.join('');
}

function spinWords(string){
  return string.split(' ').map(word => {
    return word.length >= 5 ? reverse(word.split('')) : word;
  }).join(' ');
}

console.log(spinWords("Welcome"));
// "emocleW"

console.log(spinWords("Hey fellow warriors"));
// "Hey wollef sroirraw"