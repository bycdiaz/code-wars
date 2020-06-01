// Create a function named rotate() that accepts a string argument and returns an
// array of strings with each letter from the input string being rotated to the
// end.

// Note: The original string should be included in the output array The order
// matters. Each element of the output array should be the rotated version of the
// previous element. The output array SHOULD be the same length as the input string
// The function should return an emptry array with a 0 length string, '', as input.

function rotate(str){
  let loopCount = str.length;
  const rotation = [];
  let strArray = str.split('');
  
  while (loopCount > 0) {
    const firstChar = strArray.shift();
    strArray.push(firstChar);
    rotation.push(strArray.join(''));
    loopCount -= 1;
  }

  return rotation;
}

console.log(rotate("Hello"));
// => ["elloH", "lloHe", "loHel", "oHell", "Hello"]