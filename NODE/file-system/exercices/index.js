const fs = require("node:fs")

// Exercice 1 : Lire le contenu d'un fichier
// Crée un fichier message.txt contenant un message simple, par exemple :
// Bonjour, Node.js !
// Utilise fs.readFile pour lire le contenu de message.txt.
// Affiche le contenu dans la console.

const readMessage = () => {
  fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err)
      return console.log("Error :", err)

    console.log("Data :", data)
  })
}

// Exercice 2 : Créer et écrire dans un fichier
// Utilise fs.writeFile pour créer un fichier nommé output.txt et y écrire :
// Ceci est une ligne écrite par Node.js.
// Affiche un message dans la console confirmant que le fichier a été créé.
const writeFile = () => {
  fs.writeFile('./output.txt', 'Contenu de l\'output ', 'utf-8', (err) => {
    if (err)
      return console.log("Error :", err)
  })
}




// Exercice 3 : Ajouter du texte à un fichier existant
// Ajoute la ligne suivante à output.txt (créé dans l’exercice précédent) :
// Ceci est une ligne supplémentaire.
// Utilise fs.appendFile pour éviter d'écraser le contenu existant.
// Affiche un message confirmant que le texte a été ajouté.
const appendFile = () => {
  fs.appendFile('./output.txt', 'append sur l\'output \n', 'utf-8', (err) => {
    if (err)
      return console.log("Error :", err)
  })
}

// Exercice 4 : Lire et lister les fichiers d’un répertoire
// Utilise fs.readdir pour lire les fichiers et dossiers du répertoire actuel.
// Affiche tous les noms de fichiers et de dossiers.
const readdirFile = () => {
  fs.readdir('.', (err, files) => {
    if (err)
      return console.log("Error :", err)

    console.log(files)
  })
}

// Exercice 5 : Supprimer un fichier
// Utilise fs.unlink pour supprimer le fichier output.txt.
// Gère les erreurs si le fichier n'existe pas.
// Affiche un message confirmant que le fichier a été supprimé.

const unlinkFile = () => {
  fs.unlink('output.txt',(err) => {
    if (err)
      return console.log("Error :", err)
  })
}

unlinkFile()