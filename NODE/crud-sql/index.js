const express = require("express")
const app = express()

const Product = require("./Model/Product")

app.use( express.json() )
app.use( require("./Router/ProductRouter"))

app.listen(3000, () => {
  console.log("App listening on port 3000 !")
})