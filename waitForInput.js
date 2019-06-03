const readline = require('readline')

function waitForInput () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Hit any key to continue ', input => {
    rl.close()
  })
}

module.exports = waitForInput
