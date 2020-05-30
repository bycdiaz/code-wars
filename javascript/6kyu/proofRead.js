// You've just finished writing the last chapter for your novel when a virus suddenly
// infects your document. It has swapped the 'i's and 'e's in 'ei' words and
// capitalised random letters. Write a function which will:

// a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their,
// caffeine, deceive, weight)

// b) only capitalise the first letter of each sentence. Make sure the rest of the
// sentence is in lower case.

// Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

function proofread (str) {
  const wordsArray =  str.toLowerCase().split(' ');
  let newString = [];
  wordsArray.forEach((word, index) => {
    const capitalized = word.replace(word[0], word[0].toUpperCase());
    if (index == 0) {
      word = capitalized;
    } else {
      const periodFound = newString[newString.length - 1].includes('.');
      if (periodFound) word = capitalized;
    }
    newString.push(word.replace('ie', 'ei'));
  })
  return newString.join(' ');
}
  
// console.log(proofread("He haD iEght ShOTs of CAffIEne."));
// He had eight shots of caffeine.
  
// console.log(proofread ("ShE deCIeved HiM."));
// "She deceived him."

console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));
// "Their deceit was inconceivable. She seized the moment."

// console.log(proofread("HIs nieghBOur wAs oVerwieGht."));
// "His neighbour was overweight."

// console.log(proofread("SHe rEcieveD a pIegNor."));
// "She received a peignor."