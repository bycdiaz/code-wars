// Write a function that accepts fight string consists of only small letters and return who wins the fight.
// When the left side wins return Left side wins!, when the right side wins return Right side wins!, in
// other case return Let"s fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

const leftPowers = {
  w: 4,
  p: 3,
  b: 2,
  s: 1
};

const rightPowers = {
  m: 4,
  q: 3,
  d: 2,
  z: 1
};

function declareWinner(left, right) {
  if (left > right) {
    return "Left side wins!";
  } else if (left < right) {
    return "Right side wins!"
  } else {
    return "Let's fight again!"
  }
}

function alphabetWar(fight) {
  let leftScore = 0;
  let rightScore = 0;

  for (letter of fight) {
    if (leftPowers[letter]) {
      leftScore += leftPowers[letter];
    }

    if (rightPowers[letter]) {
      rightScore += rightPowers[letter];
    }
  }

  return declareWinner(leftScore, rightScore);
}

console.log(alphabetWar('zfvxhsqzbwaz'));
// left

// console.log(alphabetWar("z"));
// right wins