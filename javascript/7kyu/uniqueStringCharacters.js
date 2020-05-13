// You will be given two strings a and b and your task will be to return
// the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 

// Notice also that you return the characters from the first string
// concatenated with those from the second string.

function solve(...strings){
  const result = []
  strings.forEach((string, index) => {
    const notInS2 = [];
    const notInS1 = [];

    if (index === 0) {
      string.split('').forEach(char => {
        if (!strings[1].includes(char)) {
          notInS2.push(char)
        }
      })
    }
    
    if (index === 1) {
      string.split('').forEach(char => {
        if (!strings[0].includes(char)) {
          notInS1.push(char)
        }
      })
    }

    result.push(notInS2, notInS1)
  })

  return result.join().replace(/,/g, '');
}

console.log(solve("xyab","xzca"));
// "ybzc"
