const express = require("express");
const { getEducation } = require("../controllers/educationController");

const router = express.Router();

router.get("/", getEducation);

module.exports = router;
