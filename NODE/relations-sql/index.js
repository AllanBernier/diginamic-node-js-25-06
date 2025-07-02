const express = require("express")
const app = express()
const models = require("./Model/index")

app.use( express.json() )
app.use( require("./Router/CategoryRouter"))
app.use( require("./Router/AuthorRouter"))


app.listen(3000, () => {
  console.log("App listening on port 3000 !")
})