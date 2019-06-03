const fs = require('fs')
const artFiles = []

function returnFive () {
  return 5
}

function welcome (name) {
  return 'welcome ' + name
}

function artFilesPushData (er, dt) {
  if (er) {
    console.error(er.message)
  } else {
    console.log(dt)
    return artFiles.push(dt)
  }
}

function getAss (callback) {
  let data = fs.readdirSync('data/')

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    const file = `data/${data[i]}`
    fs.readFile(file, 'utf-8', callback)
  }
}
function showDatAss (artwork) {
  // get  files in array
  // loop through and console.log each file

  console.log(artwork)
}

getAss(artFilesPushData)

module.exports = {
  returnFive,
  welcome,
  getAss,
  showDatAss
}
