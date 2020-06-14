// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
  let count = 0;
  str.split('').forEach(char => { if (/[a-z]/.test(char)) count += 1 })

  return count;
}

console.log(lowercaseCount("abc"));
// 3

console.log(lowercaseCount("abcABC123"));
// 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26