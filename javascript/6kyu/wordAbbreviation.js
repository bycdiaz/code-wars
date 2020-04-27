// The word i18n is a common abbreviation of internationalization in the developer community,
// used instead of typing the whole word and trying to spell it correctly. Similarly, a11y
// is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that
// string of length 4 or greater into an abbreviation, following these rules:

//     A "word" is a sequence of alphabetical characters. By this definition, any other
//     character like a space or hyphen (eg. "elephant-ride") will split up a series of
//     letters into two words (eg. "elephant" and "ride").
//     The abbreviated version of the word should have the first letter, then the number
//     of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// Example

// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(string) {
  const result = [];
  string.split(" ").forEach((word) => {
    if (word.length >= 4 && word.includes("-")) {
      const hypenated = [];
      word.split("-").forEach((compound) => {
        if (compound.length >= 4) {
          hypenated.push(`${compound[0]}${compound.length - 2}${compound[compound.length - 1]}`);
        }
      });
      result.push(hypenated.join("-"));
    } else if (word.length >= 4 && word[word.length - 1] === ",") {
      result.push(`${word[0]}${word.length - 3}${word[word.length - 2]},`);
    } else if (word.length >= 4) {
      result.push(`${word[0]}${word.length - 2}${word[word.length - 1]}`);
    } else {
      result.push(word);
    }
  });
  return result.join(" ");
}

console.log(abbreviate("You need, need not want, to complete this code-wars mission"));
// "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n"

// console.log(abbreviate("internationalization"));
// "i18n"

// console.log(abbreviate("accessibility"));
// "a11y"

// console.log(abbreviate("Accessibility"));
// "A11y"

// console.log(abbreviate("elephant-ride"));
// "e6t-r2e"

// console.log(abbreviate("elephant-rides are really fun!"));
// === "e6t-r3s are r4y fun!"
