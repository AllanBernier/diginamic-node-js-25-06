const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")



app.listen(3000, () => {
  console.log("App running on port 3000 !")
})


app.use( fileUpload({
  limits : { fileSize: 2048 * 8 * 2048}
}) )

app.post("/upload", (req, res) => {
  req.files.image.mv(`./images/${Date.now()}_${req.files.image.name}`, (err) => {
    console.log("err", err)
  })
  res.json({message : "Uploaded succesfully !"})
})