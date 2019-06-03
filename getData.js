const fs = require('fs')
const prompt = require('prompt')

function getPrompt () {
  prompt.message = 'Sick ascii art:\n' + '1: Kea\n' + '2: Kiwi\n' + '3: Nikau\n' + '4: Pohutukawa'
  prompt.delimiter = ': '
  prompt.start()

  const choice = {
    name: 'choice',
    hidden: false,
    message: '\nChoose your image'
  }

  prompt.get(choice, (err, result) => {
    if (err) throw err
    getData(result.choice)
  })
}

function getData (filename) {
  switch (filename) {
    case ('1'):
      filename = 'kea'
      break
    case ('2'):
      filename = 'kiwi'
      break
    case ('3'):
      filename = 'nikau'
      break
    case ('4'):
      filename = 'pohutukawa'
      break
    default:
      console.log('\nChoose a number between 1 and 4.')
      break
  }
  filename = filename.toLowerCase()
  fs.readFile(`./data/${filename}.txt`, 'utf-8', (err, data) => {
    if (err) console.log('') // throw err
    console.log(' ')
    console.log(data)
    getPrompt()
  })
}

module.exports = {
  getPrompt
}
