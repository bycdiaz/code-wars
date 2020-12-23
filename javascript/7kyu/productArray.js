// Given an array/list [] of integers , Construct a product array Of
// same size Such That prod[i] is equal to The Product of all the
// elements of Arr[] except Arr[i].

function productArray(numbers){
  return numbers.map((_, index) => {
    const allOthers = [];

    numbers.forEach((number, innerIndex) => {
      if (innerIndex !== index) allOthers.push(number);
    });

    return allOthers.reduce((product, number) => product * number)
  })
}

console.log(productArray([3,27,4,2]));
// [216,24,162,324]
