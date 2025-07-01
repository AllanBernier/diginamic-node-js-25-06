const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
  console.log("App listening on port :" + PORT)
})


const Products = [
  { id: 1,name: "Souris Gaming", price: 89.99, stock: 25, description: "Souris gaming haute précision avec 6 boutons programmables" },
  { id: 2,name: "Clavier Mécanique", price: 149.99, stock: 15, description: "Clavier mécanique RGB avec switches Cherry MX Blue" },
  { id: 3,name: "Écran 4K", price: 599.99, stock: 8, description: "Écran 27 pouces 4K avec technologie HDR" },
  { id: 4,name: "Casque Audio", price: 199.99, stock: 20, description: "Casque sans fil avec réduction de bruit active" },
  { id: 5,name: "Webcam HD", price: 79.99, stock: 30, description: "Webcam 1080p avec micro intégré et éclairage LED" },
  { id: 6,name: "Disque SSD", price: 129.99, stock: 18, description: "SSD 1TB NVMe avec vitesse de lecture jusqu'à 3500 MB/s" },
  { id: 7,name: "Carte Graphique", price: 899.99, stock: 5, description: "RTX 4070 Ti avec 12GB GDDR6X pour gaming ultra" },
  { id: 8,name: "Microphone USB", price: 159.99, stock: 12, description: "Microphone condenser professionnel pour streaming" },
  { id: 9,name: "Tablette Graphique", price: 299.99, stock: 10, description: "Tablette graphique 10 pouces avec stylet sans fil" },
  { id: 10,name: "Routeur WiFi", price: 189.99, stock: 22, description: "Routeur WiFi 6 avec portée étendue et sécurité avancée" },
]

let maxId = 10

// CRUD : 
// Create, Read, Update, Delete



app.get("/products", (req, res) => {
  res.json(Products)
})

app.get("/products/:id", (req, res) => {
  const id = req.params.id

  const product = Products.find( (product) => product.id == id )

  if (product){
    res.json(product)
  } else {
    res.json({message : "Product not found !"})
  }
})


app.post("/products",  (req, res) => {
  maxId ++

  console.log(req.body)

  const product = {... req.body, id : maxId}
  
  Products.push(product)

  res.json(product)
})


app.put("/products/:id", (req, res) => {
  const id = req.params.id
  const index = Products.findIndex( (product) => product.id == id )

  if (index === -1)
    return res.json({message : "Product not found !"})
  
  Products[index] = [...Products[index], ... req.body]
  res.json({message : "Product Updated"})
})

app.delete("/products/:id", (req, res) => {
  const id = req.params.id
  const index = Products.findIndex( (product) => product.id == id )
  if (index === -1)
    return res.json({message : "Product not found !"})

  Products.splice(index, 1)
  res.json({message : "Product Deleted"})
})



