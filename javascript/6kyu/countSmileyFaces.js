// Given an array (arr) as an argument complete the function
// countSmileys that should return the total number of smiling faces.

const faceParts = {
  eyes: [':', ';'],
  nose: ['-', '~'],
  mouth: [')', 'D']
}

function faceValid(face) {
  if (face.length === 2) {
    return faceParts.eyes.includes(face[0]) && faceParts.mouth.includes(face[1]);
  } else if (face.length === 3) {
    return faceParts.eyes.includes(face[0]) && faceParts.nose.includes(face[1]) && faceParts.mouth.includes(face[2])
  }
}

const arrayIsEmpty = array => array.length === 0;

function countSmileys(facesArray) {
  if (arrayIsEmpty(facesArray)) return 0;

  return facesArray.reduce((validFaceCount, face) => {
    if (faceValid(face)) validFaceCount++;

    return validFaceCount;
  }, 0)
}

console.log(countSmileys([':D',':~)',';~D',':)']));
// 4

console.log(countSmileys([]));
// 0
