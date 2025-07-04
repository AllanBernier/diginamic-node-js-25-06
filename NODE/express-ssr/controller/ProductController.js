
const Produits = [
  {
    id: 1,
    name: "Smartphone Galaxy S23",
    description: "Dernier smartphone Samsung avec écran AMOLED 6.1 pouces et appareil photo 50MP",
    stock: 15,
    price: 899.99
  },
  {
    id: 2,
    name: "Laptop MacBook Air M2",
    description: "Ordinateur portable Apple avec puce M2, 13.6 pouces et 18h d'autonomie",
    stock: 8,
    price: 1299.99
  },
  {
    id: 3,
    name: "Casque Sony WH-1000XM5",
    description: "Casque audio sans fil avec réduction de bruit active et 30h d'autonomie",
    stock: 22,
    price: 349.99
  },
  {
    id: 4,
    name: "Montre Apple Watch Series 8",
    description: "Montre connectée avec suivi cardiaque, GPS et résistance à l'eau",
    stock: 12,
    price: 399.99
  },
  {
    id: 5,
    name: "Tablette iPad Air",
    description: "Tablette Apple 10.9 pouces avec puce M1 et Apple Pencil compatible",
    stock: 18,
    price: 649.99
  },
  {
    id: 6,
    name: "Console PlayStation 5",
    description: "Console de jeux nouvelle génération avec lecteur Blu-ray 4K",
    stock: 5,
    price: 499.99
  },
  {
    id: 7,
    name: "Caméra Canon EOS R6",
    description: "Appareil photo hybride plein format avec stabilisation 5 axes",
    stock: 9,
    price: 2499.99
  },
  {
    id: 8,
    name: "Enceinte Bose SoundLink Revolve",
    description: "Enceinte Bluetooth portable avec son 360° et résistance à l'eau",
    stock: 25,
    price: 199.99
  },
  {
    id: 9,
    name: "Clavier mécanique Logitech G Pro",
    description: "Clavier gaming avec switches mécaniques et éclairage RGB",
    stock: 14,
    price: 149.99
  },
  {
    id: 10,
    name: "Écran Samsung Odyssey G9",
    description: "Moniteur gaming ultra-large 49 pouces avec courbure 1000R",
    stock: 3,
    price: 1299.99
  }
]



const controller = {}
controller.index = (req, res) => {
  res.render("index", { products : Produits})
}


controller.show = (req, res) => {} // page
controller.store = (req, res) => {} // action
controller.create = (req, res) => {} // page
controller.update = (req, res) => {} // action
controller.edit = (req, res) => {} // page

controller.destroy = (req, res) => {
  const { id } = req.params

  const index = Produits.findIndex( (p) => p.id == id)

  Produits.splice(index, 1)

  console.log("Product deleted :", id)
  res.redirect("/products")
} // action



module.exports = controller