/*
Given an array of names and a specific name string,
return the number of times that specific name
appears in the array.
*/

function countName(names, target){
  return names.reduce((count, currentName) => {
    if (currentName === target) count++;

    return count;
  }, 0)
};

const nameList = ["Bob","Ted","Amy","Alice","Bob","Ted","Amy","Ted","Amy","Fred"];                      

console.log(countName(nameList, "Ted"));
// 3


// Test.expect(countName(nameList, "Amy") == 3, "Check your code. Something's off!")
// Test.expect(countName(nameList, "Bob") == 2, "Check your code. Something's off!")