// Write a function that returns a string in which firstname is swapped with last name.

// name_shuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler('john McClane'));
// 'McClane john'