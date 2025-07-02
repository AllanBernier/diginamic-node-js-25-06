const {body, validationResult} = require("express-validator")

module.exports = [
  body("title")
    .notEmpty().withMessage("Le nom est requis")
    .trim(),
  body("description")
    .notEmpty().withMessage("La description est requise")
    .trim(),
  body("start_date")
    .notEmpty().withMessage("La date est requise")
    .isDate().withMessage("Le champ start_date doit être une date"),
  body("end_date")
    .notEmpty().withMessage("La date est requise")
    .isDate().withMessage("Le champ start_date doit être une date"),
  body("done")
    .notEmpty().withMessage("La done est requise")
    .isBoolean().withMessage("Le champ done doit être un boolean")

  ,(req, res, next) => {
    const errors = validationResult(req)
    if (errors)
      return res.json({ errors })
    next()
  }
]