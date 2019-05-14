// Write function RemoveExclamationMarks which removes all exclamation marks
// from a given string.

// my initial attempt
// function removeExclamationMarks(s) {
//
//   // split string into an array
//   let splitArray = s.split("");
//
//
//   for (var i = 0; i < splitArray.length; i++) {
//
//     // check if current iteration is !
//     if (splitArray[i] === "!") {
//       let newArray = splitArray[i].replace("!","")
//       console.log(newArray);
//     }
//   }
// }

// arrow form

// let removeExclamationMarks = s => s.replace("!","");

// working solution from codewars
function removeExclamationMarks(s) {
  let array = s.split ("")
  for (let i =0; i< array.length; i++)
  {
    if (array[i] ==="!")
    {
      array[i] = ""
    }
  }

  return array.join("");
}

console.log(removeExclamationMarks("Hello! World!!"));
