function welcomeMessage (name) {
  return (`Welcome ${name}!`)
}

function displayArtworks (array) {
  return array.join(', ')
}

module.exports = {
  welcomeMessage,
  displayArtworks
}
