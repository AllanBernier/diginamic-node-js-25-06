const {Tasks, maxTaskId} = require("../Model/Task")

const index = (req, res) => {
  return res.json(Tasks)
}

const show = (req, res) => {
  const id = req.params.id

  const task = Tasks.find((t) => t.id == id)
  if (task) {
    res.json(task)
  } else {
    res.json("Task not found !")
  }
}


const store = (req, res) => {
  const task = { ...req.body, id: ++maxTaskId }
  Tasks.push(task)
  res.json({ message: "Task created succesfully", task })
}

const update = (req, res) => {
  const id = req.params.id
  const index = Tasks.findIndex((t) => t.id == id)
  if (index != -1) {
    Tasks[index] = { ...Tasks[index], ...req.body }
    res.json({ message: "Task updated !" })
  } else {
    res.json({ message: "Task not found !" })
  }

}

const destroy = (req, res) => {
  const id = req.params.id

  const index = Tasks.findIndex((t) => t.id == id)
  if (index != -1) {
    Tasks.splice(index, 1)
    res.json({ message: "Task deleted !" })
  } else {
    res.json({ message: "Task not found !" })
  }
}



module.exports = {show, index, store, update, destroy}