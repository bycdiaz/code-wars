/*
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are
numbered from 1)
*/

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function getNameScore(name, weight) {
  const letterScore = name.toLowerCase().split('').reduce((score, letter) => {
    return score += (alphabet.indexOf(letter) + 1);
  }, 0)

  return (letterScore + name.length) * weight;
}

function rank(names, weights, rank) {
  const namesArray = names.split(',');
  if (namesArray[0] === '') return "No participants";
  if (rank > namesArray.length) return "Not enough participants";

  const nameScores = namesArray.map((name, index) => {
    return {
      name,
      score: getNameScore(name, weights[index])
    };
  })

  const scoreOrName = (a, b) => a.score === b.score ? a.name.localeCompare(b.name) : b.score - a.score;
  const sortedScores = nameScores.sort(scoreOrName);

  return sortedScores[rank - 1].name;
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [ 4, 2, 1, 4, 3, 1, 2 ], 8));

// console.log(rank("Lagon,Lily", [ 1, 5 ], 2));

// console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [ 4, 2, 1, 4, 3, 1, 2 ], 4));

// console.log(rank("William,Willaim,Olivia,Olivai,Lily,Lyli", [ 1, 1, 1, 1, 1, 1 ], 1));
// Willaim

// console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4));
// "PauL"

// describe("Rank",function() {
//   it("Basic tests",function() {
//       Test.assertEquals()
//       Test.assertEquals(rank("Lagon,Lily", [1, 5], 2), "Lagon")
//       Test.assertEquals(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
//       Test.assertEquals(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")
//   })})