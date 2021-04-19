/*
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will
be the corresponding character code, as a string.

Return an array of the resulting objects.
*/

function numObj(s){
  return s.reduce((array, currentNumber) => {
    const letter = String.fromCharCode(currentNumber);
    const key = `${currentNumber.toString()}`;
    const object = {};

    object[key] = letter;
    
    array.push(object);

    return array;
  }, [])
}

console.log(numObj([118,117,120]));
// [{'118':'v'}, {'117':'u'}, {'120':'x'}]
