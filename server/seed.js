// Clears the old data and inserts everything from data/portfolioData.js
const mongoose = require("mongoose");
require("dotenv").config({ quiet: true });

const connectDB = require("./config/db");
const Profile = require("./models/Profile");
const Skill = require("./models/Skill");
const Project = require("./models/Project");
const Experience = require("./models/Experience");
const Education = require("./models/Education");
const data = require("./data/portfolioData");

// adds an "order" field so the list keeps the same order as in the data file
const withOrder = (list) => list.map((item, index) => ({ ...item, order: index }));

const seedData = async () => {
  await connectDB();

  try {
    await Profile.deleteMany();
    await Skill.deleteMany();
    await Project.deleteMany();
    await Experience.deleteMany();
    await Education.deleteMany();

    await Profile.create(data.profile);
    const skills = await Skill.insertMany(withOrder(data.skills));
    const projects = await Project.insertMany(withOrder(data.projects));
    const experience = await Experience.insertMany(withOrder(data.experience));
    const education = await Education.insertMany(withOrder(data.education));

    console.log("Data seeded successfully");
    console.log(`Skills: ${skills.length}, Projects: ${projects.length}, Experience: ${experience.length}, Education: ${education.length}`);
  } catch (error) {
    console.log("Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seedData();
