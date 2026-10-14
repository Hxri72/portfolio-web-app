const mongoose = require("mongoose");

// one document = one group of skills (Frontend, Backend etc.)
const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  icon: String,
  items: [String],
  note: String,
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model("Skill", skillSchema);
