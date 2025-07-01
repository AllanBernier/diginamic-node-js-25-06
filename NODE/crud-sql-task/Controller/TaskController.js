const Task = require("../Model/Task")
const controller = {}

controller.index = (req, res) => {
  Task.findAll()
    .then((tasks) => res.json(tasks))
}
controller.show = (req, res) => {
  const id = parseInt(req.params.id)
  Task.findByPk(id)
    .then((t) => {
      if (t)
        return res.json(t)
      res.status(404).json({ message: "Task not found !" })
    })
    .catch((err) => res.status(500).json({ message: "Error" }))
}
controller.create = (req, res) => {
  Task.crate(req.body)
    .then((task) => res.status(201).json({ message: "Task created !", task }))
}
controller.update = (req, res) => {
  const id = parseInt(req.params.id)

  Task.update(req.body, { where: { id } })
    .then((t) => res.json({ message: "Task Updated !", task }))
    .catch((err) => res.status(404).json({ message: "Task not found !", err }))

}
controller.destroy = (req, res) => {
  const id = parseInt(req.params.id)

  Task.destroy({ where: { id } })
    .then((task) => res.json({ message: "Task Deleted !", task }))
    .catch((err) => res.status(404).json({ message: "Task not found !", err }))
}


module.exports = controller