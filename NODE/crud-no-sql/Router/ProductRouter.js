const router = require("express").Router()
const controller = require("../Controller/ProductController")

router.get("/products/:id", controller.show)
router.get("/products", controller.index)
router.post("/products", controller.store)
router.put("/products/:id", controller.update)
router.delete("/products/:id", controller.destroy)

module.exports = router