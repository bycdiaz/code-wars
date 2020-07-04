// Given a string made up of letters a, b, and/or c, switch the position of letters a and b
// (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(x){
  const switchedString = [];

  x.split('').forEach(char => {
    if (char === 'a') {
      switchedString.push('b')
    } else if (char === 'b') {
      switchedString.push('a')
    } else {
      switchedString.push(char)
    }
  })

  return switchedString.join('');
}

console.log(switcheroo('acb'));
// 'bca'

console.log(switcheroo('aabacbaa'));
// 'bbabcabb'
