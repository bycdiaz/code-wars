// Complete the function/method so that it takes CamelCase string and returns the
// string in snake_case notation. Lowercase characters can be numbers. If method
// gets number, it should return string.

function toUnderscore(string) {
  if (typeof string === 'number') return `${string}`;
  let word = [];
  const words = [];
  string.split('').forEach((char, index) => {
    if (index == 0) word.push(char);
    if (index !== 0) {
      if (/[A-Z]/.test(char)) {
        words.push(word.join(''));
        word = [char];
      } else {
        word.push(char);
      }
    }
  })
  words.push(word.join(''));
  return words.map(word => word.toLowerCase()).join('_');
}

console.log(toUnderscore('TestController'));
//  'test_controller'


console.log(toUnderscore('MoviesAndBooks'));
// returns movies_and_books

console.log(toUnderscore('App7Test'));
// returns app7_test

console.log(toUnderscore(1));
// returns "1"