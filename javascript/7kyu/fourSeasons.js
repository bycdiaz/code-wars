// Given a date day from 1 (January 1st) to 365 (December 31th) your task is to
// return the season of the year that corresponds to that day. If the number
// given is greater than 365, return "The year flew by!".

function fourSeasons(d) {
  let result = '';
  if (d > 365) {
    result = 'The year flew by!';
  } else if (d > 355 || d < 80) {
    result = 'Winter Season';
  } else if (d < 173) {
    result = 'Spring Season';
  } else if (d < 260) {
    result = 'Summer Season';
  } else {
    result = 'Autumn Season';
  }

  return result;
}

console.log(fourSeasons(500));


console.log(fourSeasons(236));
// 'Summer Season'

console.log(fourSeasons(149));
// 'Spring Season';

console.log(fourSeasons(280));
// 'Autumn Season'

console.log(fourSeasons(70));
// 'Winter Season'
