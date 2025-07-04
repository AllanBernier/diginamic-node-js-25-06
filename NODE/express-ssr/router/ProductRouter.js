const router = require("express").Router()
const controller = require("../controller/ProductController")


router.get("/products", controller.index)

router.post("/products/:id/delete", controller.destroy)

module.exports = router