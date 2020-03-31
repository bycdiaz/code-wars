// Create a function that takes 2 arrays of 5 string numbers each, and outputs
// the sum of the corresponding elements as strings as well.

// If any input is an empty string, it should return the number that isn't
// just an empty string. If both corresponding elements are empty, output "0".

function sumArr(a, b) {
  const result = [];
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] === '' || b[index] === '') {
      if (a[index] !== '') {
        result.push(a[index]);
      } else if (b[index] !== '') {
        result.push(b[index]);
      } else {
        result.push('0');
      }
    } else {
      result.push(parseInt(Number(a[index]) + parseInt(Number(b[index]))).toString());
    }
  }

  return result;
}

console.log(sumArr(['4', '5', '6', '7', '8'], ['1', '2', '3', '4', '5']));
// => ['5','7','9','11','13']

console.log(sumArr(['34', '5', '200', '17', '6'], ['27', '24', '14', '90', '16']));
// => ['61','29','214','107','22']
