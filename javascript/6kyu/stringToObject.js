/*
Please write a function that will take a string as
input and return a hash. The string will be
formatted as such. The key will always be a symbol
and the value will always be an integer.

"a=1, b=2, c=3, d=4"

This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/

function strToHash(str){
  if (str) {
    return str.split(', ').reduce((object, element) => {
      const [key, value] = element.split('=');
      object[key] = Number(value);
      return object;
    }, {})
  } else {
    return {};
  }
}

console.log(strToHash("a=1, b=2, c=3, d=4"));
// { 'a': 1, 'b': 2, 'c': 3, 'd': 4}

console.log(strToHash(""));
// {}
