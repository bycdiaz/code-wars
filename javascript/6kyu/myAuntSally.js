// Your task is to return a string of activities whose words have double adjacent letters, 
// if there are more than one seperate them by a space.

function myAuntSally(string) {
  const activities = [];
	string.split(' ').forEach(word => {
    let charRepeat = 0;
    for (let index = 0; index < word.length - 1; index += 1) {
      const isLetter = /[A-z]/.test(word.charAt(index));
      const charFirstNextSame = word.charAt(index) === word.charAt(index + 1);
      if (isLetter && charFirstNextSame) charRepeat += 1;
    }
    if (charRepeat === 1) activities.push(word);
  })
  return activities.join(' ');
}

console.log(myAuntSally('skiing'));
// 'skiing'

console.log(myAuntSally('walking running swimmming'));
// 'running'