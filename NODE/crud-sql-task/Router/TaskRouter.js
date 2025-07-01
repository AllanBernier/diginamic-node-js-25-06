const router = require("express").Router()
const controller = require("../Controller/TaskController")

router.get("/tasks", controller.index)
router.get("/tasks/:id", controller.show)
router.post("/tasks", controller.create)
router.put("/tasks/:id", controller.update)
router.delete("/tasks/:id", controller.destroy)

module.exports = router