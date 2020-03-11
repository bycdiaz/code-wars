// Complete the solution so that the function will
// break up camel casing, using a space between words.

// complete the function
function solution(string) {
  const stringArray = string.split('');
  const result = [];

  stringArray.forEach((element) => {
    const lowercase = element === element.toLowerCase();
    return lowercase ? result.push(element) : result.push(` ${element}`);
  });

  return result.join('');
}

console.log(solution('camelCasing'));
// "camel Casing"

console.log(solution('camelCasingTest'));
// 'camel Casing Test'
