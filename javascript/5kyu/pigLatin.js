/*
Move the first letter of each word to the end of it,
then add "ay" to the end of the word. Leave
punctuation marks untouched.
*/

const punctuation = ['?', '.', '!'];
const pigWord = (word) => word.slice(1) + word[0] + 'ay';

function pigIt(str){
  return str.split(' ').reduce((piggedWords, current) => {
    const punctuationDetected = punctuation.includes(current);

    punctuationDetected ? piggedWords.push(current) : piggedWords.push(pigWord(current));
    return piggedWords;
  }, []).join(' ');;
}

console.log(pigIt('Hello world !'));
// elloHay orldway !

// console.log(pigIt('Pig latin is cool'));
// 'igPay atinlay siay oolcay'
