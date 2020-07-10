// Given a month as an integer from 1 to 12, return to which quarter of the
// year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6
// (June), is part of the second quarter; and month 11 (November), is part
// of the fourth quarter.

function quarterOf(month) {
  let quarter = 0;
  const quarters = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ];

  for (let index = 0; index < quarters.length; index += 1) {
    if (quarters[index].includes(month)) {
      quarter = index + 1;
      break;
    }
  }

  return quarter;
}

module.exports = quarterOf;
