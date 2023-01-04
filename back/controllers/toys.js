const { application, json } = require("express");
const Toy = require("../models/toys");
const Category = require("../models/categories");

// Index toys
exports.indexToys = (req, res, next) => {
  Toy.find()
    .then((toys) => {
      res.status(200).json(toys);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// Show toy
exports.getOneToy = (req, res, next) => {
  Toy.findOne({ _id: req.params.id })
    .then(async (toy) => {
      let categoryName;

      await Category.findOne({ id: toy.category_id }).then((category) => {
        if (category === null) {
          categoryName = null;
        } else {
          categoryName = category.name;
        }
      });

      let displayToy = {
        id: toy._id,
        category: categoryName,
        name: toy.name,
        description: toy.description,
        price: toy.price,
      };
      // console.log(displayToy);

      res.status(200).json(displayToy);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Create toy

exports.createToy = (req, res, next) => {
  const toy = new Toy({
    ...req.body,
  });
  toy
    .save()
    .then((toy) => {
      res.status(200).json(toy);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// Update toy
exports.modifyToy = (req, res, next) => {
  Toy.updateOne({ id: req.params.id }, { ...req.body })
    .then(() => res.status(200).json({ message: "Jouet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

// Delete toy
exports.deleteToy = (req, res, next) => {
  Toy.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ message: "Jouet supprimée !" }))
    .catch((error) => {
      res.status(400).json({ error });
    });
};
