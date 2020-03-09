// Given a string, capitalize the letters that occupy even indexes and odd indexes
// separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
  const oddsCapitalized = [];
  const evensCapitalized = [];
  const result = [evensCapitalized, oddsCapitalized];

  for (let index = 0; index < result.length; index += 1) {
    if (index === 0) {
      s.split('').forEach((char, index) => {
        if (index % 2 === 0) {
          evensCapitalized.push(char.toUpperCase());
        } else {
          evensCapitalized.push(char);
        }
      });
    } else {
      s.split('').forEach((char, index) => {
        if (index % 2 !== 0) {
          oddsCapitalized.push(char.toUpperCase());
        } else {
          oddsCapitalized.push(char);
        }
      });
    }
  }

  return result.map((array) => array.join(''));
}

console.log(capitalize('codewarriors'));
// ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
