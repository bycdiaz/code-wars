// Complete the function that takes a string as an input, and return a
// list of all the unpaired characters (i.e. they show up an odd
// number of times in the string), in the order they were
// encountered as an array.

function oddOneOut(str) {
  const lettersCount = new Map();

  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (lettersCount.has(element)) {
      lettersCount.set(element, {
        count: lettersCount.get(element).count + 1,
        lastIndexSeen: index
      });
    } else {
      lettersCount.set(element, {
        count: 1,
        lastIndexSeen: index
      })
    }
  }

  const sortedByLastSeen = [...lettersCount.entries()].sort((a, b) => {
    return a[1].lastIndexSeen - b[1].lastIndexSeen;
  })
  
  const resultArray = [];

  for (const entry of sortedByLastSeen) {
    const letter = entry[0];
    const count = entry[1].count;
    
    if (count % 2 !== 0 || (count % 2 !== 0 && count > 2)) {
      resultArray.push(letter);
    }
  }

  return resultArray;
}

console.log(oddOneOut('wwoooowweeee'));
// []

console.log(oddOneOut('Hello World'));
// ["H", "e", " ", "W", "r", "l", "d"]
