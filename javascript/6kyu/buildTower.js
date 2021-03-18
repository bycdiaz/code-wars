// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

function buildLevel(floors, index) {
  const outerSegment = " ".repeat(floors - index - 1);
  const middleSegment = "*".repeat((index * 2)+ 1);

  return `${outerSegment}${middleSegment}${outerSegment}`;
}

function towerBuilder(nFloors) {
  const tower = [];

  for (let index = 0; index < nFloors; index++) {
    const level = buildLevel(nFloors, index);
    
    tower.push(level)
  }
  
  return tower;
}

console.log(towerBuilder(1));
// ["*"]

console.log(towerBuilder(2));
// [" * ","***"]

console.log(towerBuilder(3));
// ["  *  "," *** ","*****"]
