const Product = require("../Model/Product")

const index = (req, res) => {
  Product.find()
    .then((products) => {
      return res.json(products)
    })
}
const show = (req, res) => { 

  Product.findByPk()
}
const store = (req, res) => {
  Product.create(req.body)
 }
const update = (req, res) => {
  
  Product.update()
 }
const destroy = (req, res) => {
  Product.destroy()
 }

module.exports = { index, show, store, update, destroy }