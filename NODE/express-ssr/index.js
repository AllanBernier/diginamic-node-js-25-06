const express = require("express")
const app = express()

app.use( express.json() )
app.set("view engine", "ejs")
app.set("views", "views")

app.listen(3000, () => {
  console.log("App listening on port 3000 !")
})



app.use(require("./router/ProductRouter"))

app.use(express.static("static"))

