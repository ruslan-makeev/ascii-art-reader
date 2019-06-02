const fs = require('fs')

function welcomeMessage () {
  // eslint-disable-next-line no-console
  console.log('Welcome!')
}

function listFiles () {
  fs.readdir('./data', (err, files) => {
    // eslint-disable-next-line no-console
    if (err) { console.log(err.message) } else {
      console.log('Choose file pls: ')
      files.forEach((file, i) => {
        // eslint-disable-next-line no-console
        console.log(`${i + 1}: ${file}`)
      })
    }
  })
}

module.exports = {
  welcomeMessage
}

welcomeMessage()
listFiles()
