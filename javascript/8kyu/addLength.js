/*
Your task is to write a function that takes a String and returns an
Array/list with the length of each word added to each element.
*/

function addLength(str) {
  return str.split(' ').reduce((resultArray, word) => {
    resultArray.push(`${word} ${word.length}`);

    return resultArray;
  }, [])
}

console.log(addLength('apple ban'));
// ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]