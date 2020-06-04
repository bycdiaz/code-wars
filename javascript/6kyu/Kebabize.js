// Modify the kebabize function so that it converts a camel case string into a kebab case.

// Notes:
// the returned string should only contain lowercase letters

function kebabize(str) {
  const result = [];
  let word = '';
  for (let index = 0; index < str.length; index += 1) {
    const isCap = /[A-Z]/.test(str.charAt(index));
    if (isCap) {
      result.push(word.toLowerCase());
      word = str.charAt(index);
    } else {
      const isLetter = /[a-z]/.test(str.charAt(index));
      if (isLetter) word += str.charAt(index);
    }
  }
  result.push(word.toLowerCase());
  return result[0] === '' ? result.slice(1).join('-') : result.join('-');
}

console.log(kebabize('camelsHaveThreeHumps'));
// camels-have-three-humps

console.log(kebabize('camelsHave3Humps'));
// camels-have-humps

console.log(kebabize('BoT'));
// bo-t
