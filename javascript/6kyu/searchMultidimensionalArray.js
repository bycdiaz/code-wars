function flatten(arr) {
  const flattened = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element).forEach(el => flattened.push(el));
    } else {
      flattened.push(element);
    }
  })
  return flattened;
}

function locate(arr,value) {
  return flatten(arr).includes(value);
}

console.log(locate(['a','b',['c','d',['e']]],'e'));
// true