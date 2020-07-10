const quarterOf = require('./quarterOfYear');

test('March in quarter 1', () => {
  expect(quarterOf(3)).toBe(1);
});

test('September in quarter 3', () => {
  expect(quarterOf(8)).toBe(3);
});

test('November in quarter 4', () => {
  expect(quarterOf(11)).toBe(4);
});