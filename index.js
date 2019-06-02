
function welcomeMessage(name) {
  const message = `Welcome ${name}`
  return message
}

const path = require('path');
const fs = require('fs')

function listOfArtWork() {
const directoryPath = path.join(__dirname, 'data');

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to find, try again: ' + err);
  }
  files.forEach(function (file) {
    console.log(file);
  })
})
}

listOfArtWork()


module.exports = { welcomeMessage }