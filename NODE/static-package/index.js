const express = require("express")
const app = express()
const PORT = 3000
const router = require('./Router/ProductRouter')

app.use(express.json())

app.listen(PORT, () => {
  console.log("App listening on port :" + PORT)
})

app.use(router)
