// Write function replaceAll that will replace all occurrences of an item with another.

function replaceAll(sequence, find, replace) {
  if (Array.isArray(sequence)) {
    return sequence.map(item => item === find ? replace : item);
  } else if (typeof sequence === 'string') {
    return sequence.split('').map(item => item === find ? replace : item).join('');
  }
}

console.log(replaceAll([1,2,2], 1, 2));
// [2,2,2]
