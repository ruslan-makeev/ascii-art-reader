const inital = require('../index')
const fs = require('fs')

test('initisl test', () => {
  const expected = 5
  const actual = inital.returnFive()
  expect(actual).toBe(expected)
})

test('welcome user test', () => {
  // arrange
  const user = 'tamari'
  const expected = `welcome ${user}`

  // act
  const actual = inital.welcome(user)

  // assert
  expect(expected).toBe(actual)
})

test('show single artwork test', () => {
  // arrange
  const kea = 'kea.txt'
  let expected = ''
  fs.readFile('../data/kea.txt', function read (err, data) { if (err) { throw err } expected = data })
  // act
  const actual = inital.getAss(kea)

  // assert
  expect(expected).toBe(actual)
})
