// Remove all exclamation marks from the end of sentence.

function remove(s){

  while (s.slice(-1) === "!") { 
    s = s.replace(/!$/,"")
  }
  
  return s
}

// console.log(remove("Hi!"));
// "Hi"

// console.log(remove("Hi!!!"));
// "Hi"

// console.log(remove("!Hi"));
// "!Hi"

// console.log(remove("!Hi!"));
// "!Hi"

// console.log(remove("Hi! Hi!"));
// "Hi! Hi"

// console.log(remove("Hi"));
// "Hi"