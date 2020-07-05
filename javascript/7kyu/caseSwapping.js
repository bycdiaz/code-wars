// Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS
// Examples

// ""           ->   ""
// "CodeWars"   ->   "cODEwARS"
// "abc"        ->   "ABC"
// "ABC"        ->   "abc"
// "123235"     ->   "123235"

function swap(str){
  if (str.length == 0) return str;

  return str.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char = char.toLowerCase()
    } else {
      return char = char.toUpperCase();
    }
  }).join('');
}

console.log(swap("123235"));
// "123235"

console.log(swap("ABC"));
// "abc"

console.log(swap("abc"));
// "ABC"

console.log(swap("CodeWars"));
// "cODEwARS"