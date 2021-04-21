
/*
Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined

This is not the same as finding the character that repeats first. In that
case, an input of 'tweet' would yield 'e'.
*/

function getIndicesForElements(string) {
  return string.split('').reduce((object, element, index) => {
    if (object[element]) {
      object[element].count++;
    } else {
      object[element] = {
        element: element,
        index,
        count: 1
      }
    }

    return object;
  }, {})
}

function firstDup (s) {
  const duplicateElements = Object.entries(getIndicesForElements(s)).filter(object => {
    return object[1].count > 1;
  });

  const sortedByCountAndIndex = duplicateElements.sort((a, b) => {
    return a[1].index - b[1].index;
  })

  console.log(sortedByCountAndIndex);

  if (sortedByCountAndIndex.length) {
    return sortedByCountAndIndex[0][0];
  } else {
    return undefined;
  }
}

console.log(firstDup('1a2b3a3c'));
// a

console.log(firstDup('bar'));
// undefined

console.log(firstDup('Ode to Joy'));
// ' '

console.log(firstDup('tweet'));
// 't'
