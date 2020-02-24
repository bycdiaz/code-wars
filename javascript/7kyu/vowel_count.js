// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  str.split('').forEach((element) => {
    if (vowels.includes(element)) {
      vowelsCount += 1;
    }
  });

  return vowelsCount;
}

getCount('abracadabra');
// 5
