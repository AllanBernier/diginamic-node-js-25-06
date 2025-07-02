# Projet API Bars & Bières

## Description du projet
Création d'une API pour un site de bars permettant de gérer les bars, les bières et les commandes des clients. L'API permet également d'effectuer des recherches avancées sur les bières et les commandes.

---

## Schéma de la base de données

### Bars
- `id` : integer
- `name` : string, unique
- `adresse` : string
- `tel` : string
- `email` : string
- `description` : text

### Biere
- `id` : integer
- `name` : string
- `description` : text
- `degree` : float
- `prix` : float, min(0)
- `bars_id` : integer (clé étrangère)

### Biere_Commande (table de liaison)
- `biere_id` : integer (clé étrangère)
- `commande_id` : integer (clé étrangère)

### Commande
- `id` : integer
- `name` : string
- `prix` : float, min(0)
- `bars_id` : integer (clé étrangère)
- `date` : date
- `status` : string ("en cours", "terminée")

---

## Endpoints de l'API

### Bars
- `POST /bars` : Ajouter un bar
- `PUT /bars/:id_bar` : Modifier un bar
- `DELETE /bars/:id_bar` : Supprimer un bar
- `GET /bars` : Liste des bars
- `GET /bars/:id_bar` : Détail d'un bar

### Biere
- `POST /bars/:id_bar/biere` : Ajouter une bière à un bar
- `PUT /biere/:id_biere` : Modifier une bière
- `DELETE /biere/:id_biere` : Supprimer une bière d'un bar
- `GET /bars/:id_bar/biere` : Liste des bières d'un bar
- `GET /biere/:id_biere` : Détail d'une bière

### Commande
- `POST /bars/:id_bar/commandes` : Ajouter une commande à un bar
- `PUT /commandes/:id_commande` : Modifier une commande d'un bar
- `DELETE /commandes/:id_commande` : Supprimer une commande d'un bar
- `GET /bars/:id_bar/commandes` : Liste des commandes d'un bar
- `GET /commandes/:id` : Détail d'une commande d'un bar

### Biere_Commande
- `POST /commandes/:id/biere/:id` : Ajouter une bière à une commande
- `DELETE /commandes/:id/biere/:id` : Supprimer une bière d'une commande

#### Endpoints avancés
- `GET /bars/:id_bar/commandes?date=YYYY-MM-DD` : Commandes d'un bar à une date donnée
- `GET /bars/:id_bar/commandes?prix_min=10&prix_max=20` : Commandes d'un bar avec un prix compris entre 10 et 20
- `GET /bars?ville=Paris` : Bars d'une ville donnée
- `GET /bars?name=example` : Bars dont le nom contient "example"
- `GET /bars/:id_bar/degree` : Degré d'alcool moyen des bières d'un bar

---

## Structure recommandée du projet

```
models/
  bars.js
  biere.js
  commande.js
  biere_commande.js
router/
  barsRouter.js
  biereRouter.js
  commandeRouter.js
  biere_commandeRouter.js
controllers/
  barsController.js
  biereController.js
  commandeController.js
  biere_commandeController.js
validateur/
  barsValidator.js
  biereValidator.js
  commandeValidator.js
  biere_commandeValidator.js
config/
  database.js
.env
index.js
package.json
```

---

## Modules à installer (recommandation)
- express
- body-parser
- sequelize
- sqlite3
- nodemon
- express-validator
- dotenv
- faker (optionnel pour générer des fausses données)
- jest (optionnel pour les tests)
- supertest (optionnel pour les tests)

---

## Contraintes sur les routes et modèles
- Tous les champs obligatoires doivent être renseignés
- Le nom d'un bar doit être unique
- Le prix d'une bière doit être positif
- Le prix d'une commande doit être positif
- Le status d'une commande doit être "en cours" ou "terminée"
- Le status d'une commande ne peut pas être modifié si elle contient des bières
- Une commande ne peut pas être modifiée si elle est terminée
- La date d'une commande ne peut pas être supérieure à la date du jour
- Quand je supprime un bar, je supprime toutes les bières et les commandes associées
- Quand je supprime une bière, je supprime toutes les commandes associées
- Quand je supprime une commande, je supprime toutes les biere_commande associées

---

## Bonus
- `GET /bars/:id_bar/degree?prix_min=10&prix_max=20` : Degré d'alcool moyen des bières d'un bar avec un prix compris entre 10 et 20
- `GET /bars/:id_bar/degree?date=YYYY-MM-DD` : Degré d'alcool moyen des bières des commandes d'un bar à une date donnée
- `GET /bars/:id_bar/commandes?date=YYYY-MM-DD&prix_min=10&prix_max=20` : Commandes d'un bar à une date donnée avec un prix compris entre 10 et 20
- `GET /bars/:id_bar/commandes?date=YYYY-MM-DD&prix_min=10&prix_max=20&status=terminée` : Commandes d'un bar à une date donnée avec un prix compris entre 10 et 20 et terminée
- `GET /bars/:id_bar/commandes?date=YYYY-MM-DD&prix_min=10&prix_max=20&status=terminée&name=example` : Commandes d'un bar à une date donnée avec un prix compris entre 10 et 20, terminée, et dont le nom contient "example"
- `GET /commande/details/:id_commande` : Renvoie un PDF de la commande
- `GET /bars/:id_bar/biere?sort=asc|desc&limit=10&offset=5&degree_min=5&degree_max=10&prix_min=10&prix_max=20` : Liste des bières d'un bar triées, filtrées et paginées

#### Bonus 2
- Tester les routes avec Jest et Supertest

#### Bonus 3
- Venez me voir pour le bonus 3 😉

