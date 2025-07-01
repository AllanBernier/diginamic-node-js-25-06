const sequelize = require("sequelize")
const db = require("../Config/db")

const Task = db.define('task', {
  id: { type: sequelize.INTEGER, autoIncrements: true, primaryKey: true },
  title: { type: sequelize.STRING },
  description: { type: sequelize.TEXT },
  start_date: { type: sequelize.DATE },
  end_date: { type: sequelize.DATE },
  done: { type: sequelize.BOOLEAN }
})

module.exports = Task