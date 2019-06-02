const fs = require('fs')

function getData (callback){
  const filepath = './data'
  fs.readdir(filepath, 'utf-8', callback)
}

function displaydata (err, files){
  if (err){
    console.error (err.message)
  } else {
    console.log(files)
  }
}
getData(displaydata)

function welcome (name) {
  console.log(`Welcome ${name}!`)
  return `Welcome ${name}!`
}

module.exports = {
  welcome,
  getData,
  displaydata
}

