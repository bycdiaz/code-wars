// You have two arrays in this kata, every array contain only unique elements.
// Your task is to calculate number of elements in first array which also are
// in second array.

function matchArrays(firstArray,secondArray){
  return firstArray.reduce((count, element) => {
    if (secondArray.includes(element)) count++;

    return count;
  }, 0)
}

console.log(matchArrays(['Perl','Closure','JavaScript'],['Go', 'C++','Erlang']));
// 0

console.log(matchArrays(['incapsulation','OOP','array'],['time', 'propert','paralelism','OOP']));
// 1

console.log(matchArrays([1,2,3,4,5],[2,3,4,5,6]));
// 4