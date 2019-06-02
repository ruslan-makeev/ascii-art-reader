const index = require('../index.js')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('like to see a welcome message', () => {

  //Arrange
  const expected = 'Welcome Ash'
  const name = 'Ash'

  //Act

  const actual = index.welcomeMessage(name)

  //Assert
  expect(actual).toMatch(expected)
})