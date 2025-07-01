const {Products, maxId} = require("../Model/Product")

const index = (req, res) => {
  res.json(Products)
}

const show = (req, res) => {
  const id = req.params.id

  const product = Products.find((product) => product.id == id)

  if (product) {
    res.json(product)
  } else {
    res.json({ message: "Product not found !" })
  }
}

const store = (req, res) => {
  maxId++

  console.log(req.body)

  const product = { ...req.body, id: maxId }

  Products.push(product)

  res.json(product)
}


const update = (req, res) => {
  const id = req.params.id
  const index = Products.findIndex((product) => product.id == id)

  if (index === -1)
    return res.json({ message: "Product not found !" })

  Products[index] = [...Products[index], ...req.body]
  res.json({ message: "Product Updated" })
}

const destroy = (req, res) => {
  const id = req.params.id
  const index = Products.findIndex((product) => product.id == id)
  if (index === -1)
    return res.json({ message: "Product not found !" })

  Products.splice(index, 1)
  res.json({ message: "Product Deleted" })
}



module.exports = { index, show, store, update, destroy }