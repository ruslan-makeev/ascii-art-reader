const tasks = require('/home/eda/workspace/ascii-art-reader/tasks.js')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('should display a welcome message', () => {
  // arrange
  const name = 'Harry'
  const expected = 'Welcome Harry!'
  // act
  const actual = tasks.welcomeMessage(name)
  // assert
  expect(actual).toBe(expected)
})

test('should display list of ASCII artworks', () => {
  // arrange
  const artworks = ['kea', 'kiwi', 'nikau', 'pohutukawa']
  const expected = 'kea, kiwi, nikau, pohutukawa'
  // act
  const actual = tasks.displayArtworks(artworks)
  // assert
  expect(actual).toBe(expected)
})
