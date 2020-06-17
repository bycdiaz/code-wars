// Create a function wordSearch(word,text) that searches to see whether a word word is present in the given text variable.

// Note it has to be a full word which means it is surround by a word boundary (spaces, end/start of string, various punctuation, ... ).

// Example:
// Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

function wordSearch(word, text){
  return text.replace(/,/g, '').split(' ').includes(word);
}

console.log(wordSearch("prince",myText));
// true

console.log(wordSearch("beautiful",myText));
// true

// wordSearch("beautiful",text)--> true
// wordSearch("clown",text)--> false
// wordSearch("yellow",text)--> false
// wordSearch("akes the",text)--> false

