// Reverse every other word in a given string, then return the string. Throw away any
// leading or trailing whitespace, while ensuring there is exactly one space between
// each word. Punctuation marks should be treated as if they are a part of the word
// in this kata.

// initial attempt
// function reverse(str) {
//   const result = [];
//   str.split(' ').forEach((word, index) => {
//     if (index % 2 === 1) {
//       result.push(word.split('').reverse().join(''));
//     } else {
//       result.push(word)
//     }
//   })

//   return result.join(' ').trim();
// }

// 2nd attempt
function reverse(str) {
  return str.split(' ').map((word, index) => {
    return index % 2 === 1 ? word.split('').reverse().join('') : word;
  }).join(' ').trim();
}

console.log(reverse("Reverse this string, please!"));
// "Reverse siht string, !esaelp"

// console.log(reverse("I really don't like reversing strings!"));
// "I yllaer don't ekil reversing !sgnirts"