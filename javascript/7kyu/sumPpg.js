/*
Write a function, called sumPPG, that takes two NBA player
objects/struct/Hash/Dict/Class and sums their PPG
Examples:

function NBAplayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

const iverson = new NBAplayer("Iverson", "76ers", 11.2);
const jordan = new NBAplaer("Jordan", "bulls", 20.2);
sumPPG(iverson, jordan); // => 31.4
*/

class NBAplayer {
  constructor(name, team, ppg) {
    this.name = name;
    this.team = team;
    this.ppg = ppg;
  }
}

const player1 = new NBAplayer('Player 1', 'Team 1', 15);
const player2 = new NBAplayer('Player 2', 'Team 2', 27);

function sumPPG(playerOne, playerTwo){
  return playerOne.ppg + playerTwo.ppg;
}

console.log(sumPPG(player1, player2));
// 42
