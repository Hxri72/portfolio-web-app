const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  // simple email check, nothing fancy
  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  try {
    await Message.create({ name, email, message });
    res.status(201).json({ message: "Thanks! Your message has been sent." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMessage };
