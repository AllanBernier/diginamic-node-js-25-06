const router = require("express").Router()
const { Author, Book } = require("../Model/index")


router.get("/authors/:author/books", async (req, res) => {
  const author = await Author.findByPk(parseInt(req.params.author), {
    include: Book
  })

  if (!author) {
    res.status(404).json({ message: "Author not found !" })
  }

  res.json(author)
})


router.get("/books/:book/author", async (req, res) => {
  const book = Book.findByPk(parseInt(req.params.author), {
    include: Author
  })

  if (!book) {
    res.status(404).json({ message: "Book not found !" })
  }

  res.json(book)
})


router.post("/authors/:author/books", async (req, res) => {
  const author = await Author.findByPk(parseInt(req.params.author))

  if (!author) {
    res.status(404).json({ message: "Author not found !" })
  }

  const book = await Book.create({ ...req.body, authorId: author.id })

  res.status(201).json(book)
})




module.exports = router