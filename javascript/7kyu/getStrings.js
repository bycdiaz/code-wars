// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows
// up in the string by using an asterisk (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"

// As you can see, the letter c is shown only once, but wih 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces
// in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearence in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

function getStrings(city){
  const lowerCasedCity = city.toLowerCase();
  const lettersCount = {};
  let result = [];

  for (letter of lowerCasedCity) {
    if (letter !== ' ') lettersCount[letter] ? lettersCount[letter] += '*' : lettersCount[letter] = '*';
  }
  
  Object.entries(lettersCount).forEach(key => {
    result.push(`${key}`.split(',').join(':'));
  })
  
  return result.join(',');
}

console.log(getStrings("Chicago"));
// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"

console.log(getStrings("Bangkok"));
// "b:*,a:*,n:*,g:*,k:**,o:*"

console.log(getStrings("Las Vegas"));
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"