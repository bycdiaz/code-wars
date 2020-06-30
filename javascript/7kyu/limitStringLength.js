// Complete the solution, so that it returns the truncated version of the string followed by '...'.

function solution(string,limit){
  return string.length > limit ? `${string.slice(0, limit)}...` : string;
}

console.log(solution('Testing String',3));
// should return 'Tes...'

console.log(solution('Testing String',8));
// should return 'Testing ...'

console.log(solution('Test',8));
// should return 'Test'
