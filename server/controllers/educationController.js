const Education = require("../models/Education");

const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getEducation };
