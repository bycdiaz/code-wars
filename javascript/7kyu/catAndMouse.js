/*
You will be given a string (x) featuring a cat 'C' and a mouse 'm'.
The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's
current position. The cat can jump over three characters. So:
*/

const CAT_LEAP_DISTANCE = 3;
const CAT = 'C';
const MOUSE = 'm';

function catMouse(field){
  let catDetected = false;
  let distanceToLeap = 0;

  for (const currentMarker of field) {
    if (currentMarker === CAT) {
      catDetected = true;
      continue;
    }

    if (catDetected && currentMarker !== MOUSE) {
      distanceToLeap++;
      continue;
    }

    if (currentMarker === MOUSE) break;
  }
  // for (let index = 0; index < x.length; index++) {
  //   const current = x[index];
    
  //   if (current === CAT) {
  //     catDetected = true;
  //     continue;
  //   }

  //   if (catDetected && current !== MOUSE) {
  //     distanceToLeap++;
  //     continue;
  //   }

  //   if (current === MOUSE) break;
  // }

  const mouseWithinRange = distanceToLeap <= CAT_LEAP_DISTANCE;

  return mouseWithinRange ? 'Caught!' : 'Escaped!';
}

console.log(catMouse('C.....m'));
// "Escaped!"

console.log(catMouse('C..m'));
// "Caught!"

console.log(catMouse('C....m'));
// "Escaped!"
