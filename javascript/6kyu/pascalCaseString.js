/*
You must create a method that can convert a string from any format
into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
*/

const LetterOrNumber = /[A-Za-z0-9]/;

const capitalize = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();

function splitString(string) {
  let currentWord = '';
  
  const words = string.split('').reduce((words, element) => {
    if (LetterOrNumber.test(element)) {
      currentWord += element;
    } else {
      if (currentWord) {
        words.push(currentWord);
        currentWord = '';
      }
    }

    return words;
  }, [])

  if (currentWord) words.push(currentWord);

  return words;
}

function camelize(str){
  const words = splitString(str);

  return words.map(word => capitalize(word)).join('');
}

console.log(camelize("Ninja-Test--01"));
// "NinjaTest01"

// console.log(camelize("WiO8a.6l;6 zO6J"));
// "Wio8a6l6Zo6j"

// console.log(camelize("example name"));
// "ExampleName"

// console.log(camelize("your-NaMe-here"));
// "YourNameHere"

// console.log(camelize("testing ABC"));
// "TestingAbc"
