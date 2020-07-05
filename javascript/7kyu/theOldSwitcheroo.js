// Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] 
// with their respective positions within that string. 

function vowel2index(str) {
  if (str.length == 0) return str;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').map((element, index) => {
    const isVowel = vowels.includes(element.toLowerCase());
    return isVowel ? element = index + 1 : element;
  }).join('')
}

console.log(vowel2index(''));
// ''

console.log(vowel2index('Codewars is the best site in the world'));
// 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'

console.log(vowel2index('this is my string'));
// 'th3s 6s my str15ng'
