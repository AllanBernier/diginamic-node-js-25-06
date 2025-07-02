require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")


app.use(express.json())
app.use( require("./Router/ProductRouter"))

mongoose.connect(process.env.DB_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log("App listening on port 3000 !")
    })
    console.log("Connected")
  })
  .catch(err => {
    console.log("Error : ", err)
  })


const Product = require("./Model/Product")