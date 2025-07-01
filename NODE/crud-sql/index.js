const express = require("express")
const app = express()
require("dotenv").config()
const Product = require("./Model/Product")
const PORT = process.env.SERVER_PORT || 3000

app.use(express.json())
app.use(require("./Router/ProductRouter"))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} !`)
})


const middleware = (req, res, next) => {
  if (req.query.name == 5) {
    next()
  }
  res.json({ message: "Middleware failed" })
}

app.get('/up', middleware , (req, res) => {

  res.json({ message: "It works" })
})
