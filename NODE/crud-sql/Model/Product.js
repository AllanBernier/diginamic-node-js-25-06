const db = require("../Config/db")
const sequelize = require("sequelize")


const Product = db.define('product', {
  id: { type: sequelize.INTEGER, autoIncrements: true, primaryKey: true },
  price: { type: sequelize.FLOAT },
  name: { type: sequelize.STRING },
  description: { type: sequelize.TEXT },
  stock: { type: sequelize.INTEGER }
})

module.exports = Product