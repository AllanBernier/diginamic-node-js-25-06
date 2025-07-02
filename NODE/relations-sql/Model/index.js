const Book = require("./Book")
const Category = require("./Category")

Book.belongsToMany(Category, { through : "category_book" })
Category.belongsToMany(Book, { through : "category_book" })

module.exports = { Book, Category }


