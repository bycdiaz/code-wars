// Your task is to make all words which are 3 characters or less into capitals.
// You should also remove any vowels from 'long' (4 characters or more) words.

// For example:

// "The quick brown fox jumps over the lazy dog"

// Should become:

// "THE qck brwn FOX jmps vr THE lzy DOG"

// For the purposes of this kata, mid-word punctuation counts towards the
// character limit of a word.

// e.g: "it's / I'm" should become: "t's / I'M"

function smallWordHelper(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const result = [];
  sentence.split(' ').forEach((word) => {
    const newWord = [];
    if (word.length >= 4) {
      word.split('').forEach((char) => {
        if (!vowels.includes(char)) {
          newWord.push(char);
        }
      });
      result.push(newWord.join(''));
    } else {
      result.push(word.toUpperCase());
    }
  });

  return result.join(' ');
}

console.log(smallWordHelper('The quick brown fox jumps over the lazy dog'));
// "THE qck brwn FOX jmps vr THE lzy DOG"

// console.log(smallWordHelper("I'm just a small word from a small word family"));
// "I'M jst A smll wrd frm A smll wrd fmly"
