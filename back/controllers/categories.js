const Category = require("../models/categories");

// Index categories
exports.indexCategories = (req, res, next) => {
  Category.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// Show category
exports.getOneCategory = (req, res, next) => {
  Category.findOne({ id: req.params.id })
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Create categories

exports.createCategory = (req, res, next) => {
  const category = new Category({
    ...req.body,
  });
  category
    .save()
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// Update categories
exports.modifyCategory = (req, res, next) => {
  Category.updateOne({ id: req.params.id }, { ...req.body })
    .then(() => res.status(200).json({ message: "Catégorie modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Delete categories
exports.deleteCategory = (req, res, next) => {
  Category.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ message: "Catégorie supprimée !" }))
    .catch((error) => {
      res.status(400).json({ error });
    });
};
