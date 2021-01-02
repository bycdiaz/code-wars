// Create a function that takes a number and returns an array of strings containing
// the number cut off at each digit.

// 420 should return ["4", "42", "420"]

// initial solution
// function createArrayOfTiers(number) {
//   const numberAsString = number.toString();
//   const result = [];

//   for (let index = 0; index < numberAsString.length; index++) {
//     const currentSelection = numberAsString.slice(0, index + 1);

//     result.push(currentSelection);
//   }

//   return result;
// }

// with reduce
function createArrayOfTiers(number) {
  const numberAsString = number.toString();

  return numberAsString.split('').reduce((strings, _, index) => {
    const currentSelection = numberAsString.slice(0, index + 1);

    strings.push(currentSelection);

    return strings;
  }, []);
}

console.log(createArrayOfTiers(420));
// ["4", "42", "420"]
