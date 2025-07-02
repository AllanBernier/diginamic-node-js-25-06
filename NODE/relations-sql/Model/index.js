const Book = require("./Book")
const Category = require("./Category")
const Author = require("./Author")


Book.belongsTo(Author)
Author.hasMany(Book)


Book.belongsToMany(Category, { through : "category_book" })
Category.belongsToMany(Book, { through : "category_book" })

module.exports = { Book, Category }


