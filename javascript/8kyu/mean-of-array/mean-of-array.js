// It's the academic year's end, fateful moment of your school report. The averages must be calculated.
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// average = add up all the numbers, then divide by how many numbers there are.

function getAverage(marks){
    // add all values of array
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totaledGrades = marks.reduce(reducer);

    //divide by # of grades.
    let averagedGrades = totaledGrades / marks.length;
    return Math.floor(averagedGrades);
  }


console.log(getAverage([1,1,1,1,1,1,1,2]));

// top solution:

// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }