// Complete the greatestProduct method so that it'll find the greatest product
// of five consecutive digits in the given string of digits.

// The input string always has more than five digits.

function productOfDigits(digitsAsString) {
  return digitsAsString.split('').reduce((product, digit) => product * Number(digit));
}

function greatestProduct(input) {
  let maxProductSeen = 0;

  for (let index = 0; index < input.length - 4; index++) {
    const currentFiveDigits = input.slice(index, index + 5);
    const currentProduct = productOfDigits(currentFiveDigits);

    if (currentProduct > maxProductSeen) maxProductSeen = currentProduct;
  }

  return maxProductSeen;
}

console.log(greatestProduct("123834539327238239583"));
// 3240
