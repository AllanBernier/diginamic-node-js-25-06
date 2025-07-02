const Mongoose = require("mongoose")


const productSchema = new Mongoose.Schema({
  name : String,
  description : String,
  price : Number,
  stock : Number 
})

const productModel = Mongoose.model('Product', productSchema) 

module.exports = productModel