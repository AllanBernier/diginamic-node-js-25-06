const sequelize = require("sequelize")
const db = require("../Config/db")

module.exports = db.define("category", {
  id: { type: sequelize.INTEGER, autoIncrements: true, primaryKey: true },
  nom : { type : sequelize.STRING},
})
