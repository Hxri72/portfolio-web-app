const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: String,
  description: { type: String, required: true },
  problem: String,
  features: [String],
  techStack: [String],
  status: String,
  featured: { type: Boolean, default: false },
  isPrivate: { type: Boolean, default: false },
  aiAssisted: { type: Boolean, default: false },
  links: [{ type: { type: String }, label: String, url: String }],
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model("Project", projectSchema);
