// Given a string, remove any characters that are unique from the string.

function onlyDuplicates(str) {
  const count = {};
  let unique = [];
  let result = '';
  str.split('').forEach(char => {
    count[char] ? count[char] += 1 : count[char] = 1;
  })

  for (let [key, value] of Object.entries(count)) {
    if (value === 1) unique.push(key)
  }
  
  str.split('').forEach(char => {
    if (!unique.includes(char)) result += char;
  })

  return result;
}

console.log(onlyDuplicates("abccdefee"));
// "cceee"

console.log(onlyDuplicates('colloquial'));
// 'ollol'

console.log(onlyDuplicates('foundersandcoders'));
// 'ondersndoders'