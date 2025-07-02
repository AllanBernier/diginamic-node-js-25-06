const Product = require("../Model/Product")
const controller = {}




controller.show = (req, res) => {
  const { id } = req.params

  Product.findById(id)
    .then((p) => res.json(p))
    .catch((err) => res.status(404).json("Product not found !"))
}

controller.index = (req, req) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json(err))
}

controller.store = (req, req) => {
  const newProduct = new Product(req.body)

  newProduct.save()
    .then((p) => res.status(201).json(p))
    .catch((err) => res.status(500).json(err))
}
controller.update = (req, req) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((p) => res.json(p))
    .catch((err) => res.status(500).json(err))
}
controller.destroy = (req, req) => {
  Product.findByIdAndDelete(req.params.id)
    .then((p) => res.json(p))
    .catch((err) => res.status(500).json(err))
}

module.exports = controller