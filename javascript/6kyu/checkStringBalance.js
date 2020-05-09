// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string
// left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy,
// return "Right"; If they are balanced, return "Balance".

function balance(...strings) {
  let leftWeight = 0;
  let rightWeight = 0;

  strings.forEach((string, index) => {
    string.split('').forEach(char => {
      if (index === 0) {
        char === '!' ? leftWeight += 2 : leftWeight += 3;
      } else {
        char === '!' ? rightWeight += 2 : rightWeight += 3;
      }
    })
  })

  if (leftWeight === rightWeight) return "Balance"
  return leftWeight > rightWeight ? "Left" : "Right";
}

console.log(balance("!!", "??"));
// "Right"

console.log(balance("!??", "?!!"));
// "Left"

console.log(balance("!?!!","?!?"));
// "Left"

console.log(balance("!!???!????", "??!!?!!!!!!!"));
// "Balance"
