// While making a game, your partner, Greg, decided to create a function
// to check if the user is still alive called checkAlive/CheckAlive.
// Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive should return true if the player's health is
// greater than 0 or false if it is 0 or below.

// checkAlive receives one parameter health which will always be a whole
// number between -10 and 10.

// initial solution
// function checkAlive(health) {
//   if (health > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// concise
// checkAlive = (health) => {
//   return health > 0
// }

// moar concise
checkAlive = (health) => health > 0;

console.log(checkAlive(2));
