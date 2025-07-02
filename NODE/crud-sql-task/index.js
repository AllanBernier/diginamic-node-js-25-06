require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.SERVEUR_PORT || 3000

app.use(express.json())
app.use( require("./Router/TaskRouter") )

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} !`)
})