const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  headline: String,
  intro: String,
  bio: [String],
  location: String,
  email: String,
  phone: String,
  resumeUrl: String,
  photoUrl: String,
  available: { type: Boolean, default: true },
  focus: [String],
  links: {
    github: String,
    linkedin: String,
  },
  stats: [{ value: String, label: String }],
  services: [{ icon: String, title: String, description: String }],
  facts: [{ label: String, value: String }],
});

module.exports = mongoose.model("Profile", profileSchema);
