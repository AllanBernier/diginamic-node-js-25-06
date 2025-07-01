const Tasks = [
  { id: 1, titre: "Préparer la réunion", description: "Organiser les documents pour la réunion de lundi", date_debut: "2024-06-10", date_fin: "2024-06-10", done: false },
  { id: 2, titre: "Envoyer le rapport", description: "Envoyer le rapport trimestriel au manager", date_debut: "2024-06-08", date_fin: "2024-06-09", done: true },
  { id: 3, titre: "Réviser le code", description: "Faire une revue du code du projet API", date_debut: "2024-06-11", date_fin: "2024-06-12", done: false },
  { id: 4, titre: "Mettre à jour le site web", description: "Ajouter la nouvelle section blog au site", date_debut: "2024-06-07", date_fin: "2024-06-13", done: false },
  { id: 5, titre: "Appeler le client", description: "Appeler le client pour valider les spécifications", date_debut: "2024-06-09", date_fin: "2024-06-09", done: true },
  { id: 6, titre: "Planifier la formation", description: "Préparer le planning de la formation interne", date_debut: "2024-06-14", date_fin: "2024-06-15", done: false },
  { id: 7, titre: "Nettoyer la base de données", description: "Supprimer les anciens enregistrements inutiles", date_debut: "2024-06-12", date_fin: "2024-06-12", done: false },
  { id: 8, titre: "Acheter du matériel", description: "Commander des fournitures de bureau", date_debut: "2024-06-08", date_fin: "2024-06-10", done: true },
  { id: 9, titre: "Écrire la documentation", description: "Rédiger la documentation technique du module", date_debut: "2024-06-13", date_fin: "2024-06-16", done: false },
  { id: 10, titre: "Tester l'application", description: "Effectuer les tests fonctionnels de la nouvelle version", date_debut: "2024-06-11", date_fin: "2024-06-12", done: false }
]

let maxTaskId = 10


module.exports = {Tasks, maxTaskId}