const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  course: { type: String, required: true },
  institution: { type: String, required: true },
  year: String,
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model("Education", educationSchema);
