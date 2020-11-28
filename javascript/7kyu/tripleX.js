// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

function tripleX(str){
  const indexOfFirstx = str.indexOf('x');
  const potentialTriple = str.slice(indexOfFirstx, indexOfFirstx + 3);

  return potentialTriple === 'xxx';
}

console.log(tripleX("abraxxxas"));
// true

console.log(tripleX("xoxotrololololololoxxx"));
// false

console.log(tripleX("softX kitty, warm kitty, xxxxx"));
// true

console.log(tripleX("softx kitty, warm kitty, xxxxx"));
// false