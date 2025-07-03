// Exercice 1 : Exécuter une commande shell
// Utilise exec pour exécuter la commande ls ou dir (selon ton système d'exploitation).
// Affiche les résultats ou les erreurs dans la console.

const { exec } = require("child_process")

const commande = process.platform === 'win32' ? 'dir' : 'ls' 

exec(commande, (err, stdout, stderr) => {
  console.log(stdout)
})