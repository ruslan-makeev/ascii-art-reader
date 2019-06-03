const fs = require('fs')

function listFiles(callback) {
  const filePath = `./data`
  fs.readdir(filePath, 'utf8', callback)
}
//callback
function showList(err, data) {
  if (err) console.error(err.message)
  else data.forEach((element, idx) => console.log(`${idx + 1} ${element}`))
  }

function showChoosenBird(bird,callback){
const filePath = `./data/${bird}.txt`
fs.readFile(filePath, 'utf8', callback)
}

//callback
function pickABird(err, bird) {
if (err) console.error(err.message)
else console.log(bird)
}



console.log('Welcome!') 
listFiles(showList)
 showChoosenBird('kea',pickABird)