const index = require('./index.js')

test('Test suite is running', () => {
  expect(true).toBeTruthy()
})

test('Welcome prints a welcome message', () => {
  const name = 'Keith'
  const expected = 'Welcome Keith!'
  const actual = index.welcome('Keith')

  expect(actual).toBe(expected)
})