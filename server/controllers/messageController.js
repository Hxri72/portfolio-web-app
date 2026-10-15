const Message = require("../models/Message");
const sendContactEmail = require("../utils/sendEmail");

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

    // the message is already saved, so a failed email shouldn't fail the request
    try {
      await sendContactEmail({ name, email, message });
    } catch (emailError) {
      console.log("Email notification failed:", emailError.message);
    }

    res.status(201).json({ message: "Thanks! Your message has been sent." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMessage };
