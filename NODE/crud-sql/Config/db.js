const Sequelize = require("sequelize")

const db = new Sequelize({
  dialect : process.env.DB_DIALECT,
  storage: process.env.STORAGE
})

db.sync()

module.exports = db