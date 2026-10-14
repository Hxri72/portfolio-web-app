const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  startDate: String, // "2023-05"
  endDate: { type: String, default: "" }, // empty means Present
  summary: String,
  points: [String],
  tech: [String],
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model("Experience", experienceSchema);
