const router = require("express").Router()
const {index, show, update, store, destroy} = require("../Controller/TaskController")


router.get("/tasks", index)
router.get("/tasks/:id", show)
router.post("/tasks", update)
router.put("/tasks/:id", store)
router.delete("/tasks/:id", destroy)

module.exports = router