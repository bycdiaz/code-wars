// Complete the function caffeineBuzz, which takes a non-zero 
// integer as it's one argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return 
// the string "Coffee"

// If the integer is one of the above and is even, add "Script" 
// to the end of the string.

// Otherwise, return the string "mocha_missing!"

// caffeineBuzz(1)   => "mocha_missing!"
// caffeineBuzz(3)   => "Java"
// caffeineBuzz(6)   => "JavaScript"
// caffeineBuzz(12)  => "CoffeeScript"

// initial solution
function caffeineBuzz(n){
  let result = '';
  if ( n % 3 === 0 && n % 4 === 0 ) {
    result = 'Coffee'
    if (n % 2 === 0) {
      result = `${result}Script`
    }
  } else if ( n % 3 === 0 ) {
    result = "Java"
    if (n % 2 === 0) {
      result = `${result}Script`
    }
  } else {
    result = 'mocha_missing!'
  }
  return result;
}

console.log(caffeineBuzz(6));