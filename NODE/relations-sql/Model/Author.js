const sequelize = require("sequelize")
const db = require("../Config/db")

const Author = db.define('author', {
  id: { type: sequelize.INTEGER, autoIncrements: true, primaryKey: true },
  first_name: { type: sequelize.STRING },
  last_name: { type: sequelize.STRING },
})

module.exports = Author