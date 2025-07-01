const express = require("express")
const app = express()
const taskRouter = require("./Router/TaskRouter")

app.use(express.json())
app.use(taskRouter)

app.listen(3000, () => {
  console.log("App listening on port 3000 !")
})
