// You are given a list/array which contains only integers (positive and negative).
// Your job is to sum only the numbers that are the same and consecutive. The
// result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty
// list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

function sumConsecutives(s) {
  let holdingPen = [];
  const sumHoldingPen = (acc, cur) => acc + cur;
  const result = [];

  for (let index = 0; index <= s.length - 1; index++) {
    const currentValue = s[index];
    const nextValue = s[index + 1];

    if (currentValue !== nextValue) {
      if (holdingPen.length > 0) {
        holdingPen.push(currentValue);
        result.push(holdingPen.reduce(sumHoldingPen, 0));
        holdingPen = [];
        continue;
      }
      
      result.push(currentValue);
    } else {
      holdingPen.push(currentValue);
    }
  }

  return result;
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
// [1,12,0,4,6,1]