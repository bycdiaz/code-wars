/*
Your task is to write a function calledvalidSpacing() which
checks if a string has valid spacing. The function should
return either True or False.
*/

function endsCheck(string) {
  const start = string[0];
  const end = string[string.length - 1];

  if (start === ' ' || end === ' ') return true;
}

function validSpacing(s) {
  const startsEndsWithSpace = endsCheck(s);
  if (startsEndsWithSpace) return false;

  for (let index = 1; index < s.length - 1; index++) {
    if (s[index] === ' ') {
      if (s[index - 1] === ' ' || s[index + 1] === ' ') {
        return false;
      }
    }
  }

  return true;
}

console.log(validSpacing('Hello world'));
// true
