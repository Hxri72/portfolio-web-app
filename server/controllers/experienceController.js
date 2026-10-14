const Experience = require("../models/Experience");

const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ order: 1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getExperience };
