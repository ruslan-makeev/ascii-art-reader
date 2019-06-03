const fs = require('fs')
const path = require('path')
const readline = require('readline')

function welcomeMessage () {
  // eslint-disable-next-line no-console
  console.log('Welcome!')
}

function listFiles (done) {
  fs.readdir('./data', (err, files) => {
    let obj = {}
    // eslint-disable-next-line no-console
    if (err) { 
      console.log(err.message) 
      if (done) done(err)
      } else {
      // eslint-disable-next-line no-console
      console.log('Choose file pls: ')
      files.forEach((file, i) => {
        // eslint-disable-next-line no-console
        console.log(`${i + 1}: ${file}`)
        obj[i] = file
      })
      if (done) done(obj)
    }
  })
}

function readFile (fileName, callBack) {
  fs.readFile(`./data/${fileName}`, 'utf8', (err, file) => {
    if (err) {
      if (callBack) callBack(err.message)
    } else {
      if (callBack) callBack(file)
    }
  })
}

function selectFile (index) {

}

function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {
    rl.close()

    // Call any functions you like here. For example:
    if (input) {
      switch (input){
        case '1':
        selectFile('kea.txt')
        break
         case '2':
        selectFile('kiwi.txt')
        break
         case '3':
        selectFile('nikau.txt')
        break
         case '4':
        selectFile('pohutukawa.txt')
        break
        default:

      }
    }
    // loadFile(input)
  })
}

module.exports = {
  welcomeMessage,
  listFiles,
  readFile
}

welcomeMessage()
let mapy
listFiles(result => return result)
console.log(mapy)
readFile('kea.txt', (result) => { console.log(result) })
