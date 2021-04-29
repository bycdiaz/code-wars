/*
Assume "#" is like a backspace in string. This means that
string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// initial solution
// function cleanString(string) {
// 	const stack = [];

//   for (const element of string) {
//     element === '#' ? stack.pop() : stack.push(element);
//   }

//   return stack.join('');
// };

// with reduce
function cleanString(string) {
  return string.split('').reduce((stack, element) => {
    element === '#' ? stack.pop() : stack.push(element);

    return stack;
  }, []).join('');
};

console.log(cleanString('abc#d##c'));
// "ac"

console.log(cleanString('abc####d##c#'));
// ""
