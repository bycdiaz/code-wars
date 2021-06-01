/*
Given a list of integers A, for each pair of integers (first, last) in list ranges,
calculate the sum of the values in A between indices first and last
(both inclusive), and return the greatest resulting sum.

Example

A = [1, -2, 3, 4, -5, -4, 3, 2, 1]
ranges = [(1, 3), (0, 4), (6, 8)]

result = 6
*/

function maxSum(array, ranges){
  const sums = [];
  let currentSum = 0;

  for (const range of ranges) {
    const [start, end] = range;
    const currentSelection = array.slice(start, end + 1);
    
    currentSum = currentSelection.reduce((acc, cur) => acc + cur, 0);

    sums.push(currentSum);
  }

  return sums.sort((a, b) => b - a)[0];
}

console.log(maxSum([-80664,-67724,34624,-186,19885,63866,-49676,52429,-3321,-79436,50869,4999,13257,-59989,-8514,15236,-22474,-19936,-21591,-87929,-13089,42487,8442,-37205,-79053,57525,-84632,71317,36486,33127,-69421,43381,-27085,93288,-99243,67805,-78259,28031,17662,50361,-16746,-6712,4413,-81938,-23387,-41846,-95927,18818,46390,95202,-86925,25545,17147,76748,30299,-32519,-72170,-98508,-24871,57929,-90828,-1703,-28741,99172,-38305,26435,-66822,49218,58971,56143], [[19,25],[36,47],[52,64],[0,12],[12,51],[17,55]]));
// -41078

console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1],[[1, 3],[0, 4],[6, 8]]));
// 6
