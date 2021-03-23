// Given a sequence of different type of values (number, string,
// boolean). You should return an object with a separate
// properties for each of types presented in input. Each
// property should contain an array of corresponding values.

// initial solution
function separateTypes(input) {
  const types = {};

  for (const element of input) {
    const currentType = typeof element;

    if (types[currentType]) {
      types[currentType].push(element);
    } else {
      types[currentType] = [element];
    }
  }

  return types;
}

// using reduce
function separateTypes(input) {
  return input.reduce((types, element) => {
    const type = typeof element;

    types[type] ? types[type].push(element) : types[type] = [element];

    return types;
  }, {})
}

console.log(separateTypes(['a', 1, 2, false, 'b']));
// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }