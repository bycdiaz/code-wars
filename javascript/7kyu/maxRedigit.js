// Create a function that takes one positive three digit integer and
// rearranges its digits to get the maximum possible number. Assume
// that the argument is an integer. Return null (nil for Ruby,
// nothing for Julia) if the argument is not valid.

function sortGreatestToLeast(number) {
  const sorted = number.toString().split('').sort((a, b) => {
    return b - a;
  })

  return sorted.length !== 3 ? null : Number(sorted.join(''));
}

function maxRedigit(num) {
  if (num <= 0) return null;

  const sortedNumber = sortGreatestToLeast(num);
  
  return sortedNumber >= num ? sortedNumber : null;
};

console.log(maxRedigit(123));
// 321
