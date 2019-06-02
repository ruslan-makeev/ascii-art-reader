const tasks = require('/home/eda/workspace/ascii-art-reader/tasks.js')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('should display a welcome message', () => {
  const name = 'Harry'
  // arrange
  // act
  const expected = 'Welcome Harry!'
  // assert
  const actual = tasks.welcomeMessage(name)
  expect(actual).toBe(expected)
})
