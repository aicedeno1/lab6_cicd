const assert = require('./sum');

test('Suma de 1 + 2 debe ser igual a 3', () => {
  expect(assert(1, 2)).toBe(3);
});