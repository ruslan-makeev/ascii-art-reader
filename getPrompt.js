const prompt = require('prompt')
const getData = require('./getData')

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

module.exports = getPrompt
