const sequelize = require("sequelize")
const db = require("../Config/db")

module.exports = db.define("book", {
  id: { type: sequelize.INTEGER, autoIncrements: true, primaryKey: true },
  title : { type : sequelize.STRING},
  resume : { type : sequelize.TEXT}
})
