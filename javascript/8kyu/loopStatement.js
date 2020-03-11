function pickIt(arr) {
  const odd = []; const even = [];

  for (let index = 0; index < arr.length; index += 1) {
    const num = arr[index];
    const ifOdd = num % 2 === 0;

    ifOdd ? even.push(num) : odd.push(num);
  }
  return [odd, even];
}

console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
