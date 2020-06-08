// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

function capMe(names) {
  return names.map(name => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`)
}

console.log(capMe(['jo', 'nelson', 'jurie']));
// returns ['Jo', 'Nelson', 'Jurie']

console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));
// returns ['Karly', 'Daniel', 'Kelsey']