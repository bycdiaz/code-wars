// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a
// length of 2. Given a lowercase string that has alphabetic characters only and no
// spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function solve(s){
  const inputAsArray = s.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let maxSequenceLength = 0;
  let vowelCount = 0;

  inputAsArray.forEach((char, index) => {
    const nextChar = inputAsArray[index + 1];
    if (vowels.includes(char) && vowels.includes(nextChar)) {
      vowelCount += 1;
    } else {
      if(vowelCount > maxSequenceLength) {
        maxSequenceLength = vowelCount;
      }
      vowelCount = 0;
    }
  })

  return maxSequenceLength + 1;
}

console.log(solve("iiihoovaeaaaoougjyaw"));
// 8

console.log(solve("chrononhotonthuooaos"));
// 5

console.log(solve("cuboideonavicuare"));
// 2

console.log(solve("strengthlessnesses"));
// 1

console.log(solve("ultrarevolutionariees"));
// 3

console.log(solve("suoidea"));
// 3

console.log(solve("codewarriors"));
// 2