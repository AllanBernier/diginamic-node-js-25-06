const router = require("express").Router()
const controller = require("../Controller/TaskController")
const StoreTaskRequest = require("../Middleware/FormRequest/StoreTaskRequest")


router.get("/tasks", controller.index)
router.get("/tasks/:id", controller.show)

router.post("/tasks", StoreTaskRequest , controller.create)
router.put("/tasks/:id", StoreTaskRequest, controller.update)
router.delete("/tasks/:id", controller.destroy)

module.exports = router