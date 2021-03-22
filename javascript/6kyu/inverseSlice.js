// Write a function inverseSlice() that takes three arguments:
// a list items, an integer a and an integer b. The function
// should return a new list with the slice specified by
// items[a:b] excluded.



function inverseSlice(items, a, b) {
  const outOfRange = (_, index) => index < a || index >= b;
  return items.filter(outOfRange);
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
// [12, 14, 55, 24]