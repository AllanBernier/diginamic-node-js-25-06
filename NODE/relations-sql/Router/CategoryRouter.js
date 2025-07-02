const router = require("express").Router()
const { Category, Livre } = require("../Model/index")


router.get('/categories/:category/books', (req, res) => {
  const category_id = parseInt(req.params.category)

  Category.findByPk(category_id, {
    include: Livre
  })
    .then((category) => {
      if (category)
        return res.json(category)
      return res.status(404).json({ message: "Category not found !" })
    })
})


router.post("/book", async (req, res) => {
  const { title, resume, category_id } = req.body

  const category = await Category.findByPk(category_id)
  if (!category)
    return res.status(404).json({ message: "Category not found !" })

  const book = await Book.create({ title, resume })
  await category.addBook(book)

  res.json(book)
})


// DELETE /book/8/category/5
router.delete("/book/:book/category/:category",async (req, res) => {

  const category = await Category.findByPk(parseInt(req.params.category))
  const book = await Book.findByPk(parseInt(req.params.book))

  if (!category)
    return res.status(404).json({ message: "Category not found !" })

  if (!book)
    return res.status(404).json({ message: "Book not found !" })

  await category.removeBook(book)

  res.json({ message : "Book detached succesfully !"})

})


module.exports = router