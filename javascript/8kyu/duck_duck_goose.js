// Task: Given an array of Player objects (an array of associative arrays in PHP)
// and an index (1-based), return the name of the chosen Player(name is a
// property of Player objects, e.g Player.name)

class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players,goose) {
  let index = (goose - 1) % players.length;
  return players[index].name;
}

console.log(duckDuckGoose(players, 1));
// should return a.name

// console.log(duck_duck_goose([a, b, c, d], 5));
// should return a.name

// console.log(duck_duck_goose([a, b, c, d], 4));
// should return d.name