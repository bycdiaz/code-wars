/*
You have to sort the inner content of every word of a string
in descending order.
The inner content is the content of a word without first and
the last char.

Some examples:

"sort the inner content in descending order" -> "srot the
inner ctonnet in dsnnieedcg oredr"
"wait for me" -> "wiat for me"
"this kata is easy" -> "tihs ktaa is esay"
*/

function sortDescending(string) {
  const descending = (a, b) => b.localeCompare(a);
  return string.split('').sort(descending).join('');
}

function setInnerContent(string) {
  return string.length >= 2 ? sortDescending(string) : string;
}

function sortTheInnerContent(string) {
  return string.split(' ').map(word => {
    const firstLetter = word[0];
    if (word.length === 1) return firstLetter;
    const lastLetter = word[word.length - 1];
    let finalInnerContent = setInnerContent(word.slice(1, word.length -1));

    return `${firstLetter}${finalInnerContent}${lastLetter}`;
  }).join(' ');
}

console.log(sortTheInnerContent("sort the inner content in descending order"));
// "srot the inner ctonnet in dsnnieedcg oredr"

console.log(sortTheInnerContent('xsrolhew nn ivtqnfecbq nusrqhhu wjc kt ozysroomkq zqfddr pzvrdh'));
// 'xsrolhew n ivtqnfecbq nusrqhhu wjc kt ozysroomkq zqfddr pzvrdh'

console.log(sortTheInnerContent('ezzxohw cmjfdcav ayuuphgfj ssig uxsr ytfcx vv azrem'));
// 'ezzxohw cmjfdcav ayuuphgfj ssig uxsr ytfcx v azrem'