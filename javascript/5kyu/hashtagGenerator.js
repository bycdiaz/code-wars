// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  const wordsArray = str.trim().split(/\s+/);
  if (wordsArray[0] === "") return false;

  const camelCasedString = wordsArray.reduce((string, word) => {
    word = `${word[0].toUpperCase()}${word.slice(1)}`
    return string += word;
  }, '');

  const hashtag = `#${camelCasedString}`;

  return hashtag.length <= 140 ? hashtag : false;
}

console.log(generateHashtag(" ".repeat(200)));
// false, "Still an empty string"

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
// "#HelloThereThanksForTryingMyKata"

console.log(generateHashtag("    Hello     World   "));
// "#HelloWorld"

console.log(generateHashtag(""));
// false