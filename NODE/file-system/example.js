const fs = require("fs")


fs.appendFile('example.txt', 'Contenu !', 'utf8', (err) => {
  console.log('err :', err)
})