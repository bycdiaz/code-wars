// Your fellow coders have bought you several drinks
// tonight in the form of a string. Return a string
// suggesting how many glasses of water you should
// drink to not be hungover. Consider that any
// "numbered thing" in the string is a drink.

function hydrate(s) {
  let watersSuggested = 0;
  s.split('').forEach(element => {
    if (/[0-9]/.test(element)) watersSuggested += Number(element);
  })

  if (watersSuggested === 1) {
    return `${watersSuggested} glass of water`;
  } else {
    return `${watersSuggested} glasses of water`;
  }
}

console.log(hydrate("2 glasses of wine and 1 shot"));
// "3 glasses of water"
