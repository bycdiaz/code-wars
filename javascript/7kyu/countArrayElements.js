// Write a function that takes an array and counts the number of each unique element present.

function count(array){
  const itemCount = {};
  array.forEach(item => {
    itemCount[item] ? itemCount[item] += 1 : itemCount[item] = 1;
  })

  return itemCount;
}

console.log(count(['james', 'james', 'john']));
// { 'james': 2, 'john': 1}

console.log(count(['a', 'a', 'b', 'b', 'b']));
// { 'a': 2, 'b': 3 }