const inital = require('../index')

test('', () => {
  const expected = 5
  const actual = inital.returnFive()
  expect(actual).toBe(expected)
})