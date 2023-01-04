const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category_id: { type: Number },
});

module.exports = mongoose.model("Toy", toySchema);
