// Exercice 3 : Créer un processus enfant qui exécute un script
// Crée deux fichiers :
// exercise3.js (thread principal)
// worker.js (script enfant).
// Dans worker.js, affiche un message comme Je suis un processus enfant !.
// Dans exercise3.js, utilise fork pour exécuter worker.js et affiche la sortie dans la console.

const { fork } = require("child_process")

const child = fork("./worker.js")

child.on('message', (msg) => {
  console.log("Recieved :", msg)
})

child.on('error', (err) => {
  console.log("Error :", err)
})