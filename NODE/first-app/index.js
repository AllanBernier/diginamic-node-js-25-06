const express = require("express")
const app = express()
const PORT = 3000

app.listen(PORT, () => {
  console.log("App listening on port " + PORT)
})

app.get('/up' ,(req, res) => {
  res.json({message : "It works !"})
})


