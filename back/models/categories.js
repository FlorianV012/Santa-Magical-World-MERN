const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Category", categorySchema);
