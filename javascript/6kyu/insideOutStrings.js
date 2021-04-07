/*
You are given a string of words (x), for each word within the string you
need to turn the word 'inside out'. By this I mean the internal letters
will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd,
you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

function reverseSegment(segment) {
  const segmentAsArray = segment.split('');
  let leftIndex = 0;
  let rightIndex = segment.length - 1;

  while (leftIndex < rightIndex) {
    const temp = segmentAsArray[leftIndex];
    segmentAsArray[leftIndex] = segmentAsArray[rightIndex];
    segmentAsArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  
  return segmentAsArray.join('');
}

function invertWord(word) {
  const wordLength = word.length;
  const lengthIsEven = wordLength % 2 === 0;

  if (lengthIsEven) {
    const firstHalf = word.slice(0, wordLength / 2);
    const secondHalf = word.slice(wordLength / 2);
    
    return `${reverseSegment(firstHalf)}${reverseSegment(secondHalf)}`;
  } else {
    const firstHalf = word.slice(0, wordLength / 2);
    const secondHalf = word.slice((wordLength / 2) + 1);
    const middle = word.slice(wordLength / 2, (wordLength / 2) + 1);

    return `${reverseSegment(firstHalf)}${middle}${reverseSegment(secondHalf)}`;
  }
}

function insideOut(string){
  return string.split(' ').map(word => {
    return word.length > 3 ? invertWord(word) : word;
  }).join(' ');
}

console.log(insideOut('taxi'));
// 'atix'

console.log(insideOut('taxis'));
// 'atxsi'

console.log(insideOut('man i need a taxi up to ubud'));
// 'man i ende a atix up to budu'