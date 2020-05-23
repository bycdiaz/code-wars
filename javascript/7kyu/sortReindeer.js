// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
// Notes:

//     It's guaranteed that each string is composed of two words
//     In case of two identical last names, keep the original order

// Examples

// For this input:



// You should return this output:



function sortReindeer(reindeerNames) {
  const byLastName = (a, b) => {
    const current = a.split(' ')[1];
    const next = b.split(' ')[1];
    return current.localeCompare(next)
  }
  return reindeerNames.sort(byLastName);
}

const names = [
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]

console.log(sortReindeer(names));
// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan", 
//   "Vixen Hall", 
//   "Donder Jonker", 
//   "Comet Karavani",
//   "Dancer Moore", 
//   "Dasher Tonoyan",
// ]