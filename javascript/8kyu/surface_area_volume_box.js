// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(a, b, c) {
  let result = []
  let surfaceArea = (2 * a * b) + (2 * b * c) + (2 * a * c)
  result.push(surfaceArea) 

  let volume = a * b * c
  result.push(volume)

  return result
}

console.log(getSize(10, 10, 10));
