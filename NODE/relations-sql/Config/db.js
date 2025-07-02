const Sequelize = require("sequelize")

const db = new Sequelize({
  dialect : process.env.DB_DIALECT || "sqlite",
  storage : process.env.DB_STORAGE || "./db.sqlite"
})

db.sync()

module.exports = db