// Write function consecutiveOnes(nums) {} that takes in array nums and returns the maximum consecutive 1's

function consecutiveOnes(nums) {
  if (!nums.some(num => num === 1)) return 0;
  let highestCount = 0;
  let count = 0;

  for (let index = 0; index < nums.length; index += 1) {
    if (nums[index] === 1) {
      if (nums[index] == 1 && nums[index] == nums[index + 1]) {
        count += 1;
      } else {
        if (highestCount < count) {
          highestCount = count;
        }
        count = 0;
      }
    }
  }

  return highestCount + 1;
};

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]));
// 3

console.log(consecutiveOnes([1, 1, 0, 0, 1]));
// 2

console.log(consecutiveOnes([0, 0, 0, 0, 0]));
// 0