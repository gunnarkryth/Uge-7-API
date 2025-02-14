import express from "express";
import sequelize from "../config/sequelizeConfig.js";
import genderModel from "../models/genderModel.js";
import staffModel from "../models/staffModel.js";
import userModel from "../models/userModel.js";
import { seedFromCsv } from "../utils/seedUtils.js";

export const dbController = express.Router();

dbController.get("/sync", async (req, res) => {
  try {
    const result = await sequelize.sync({ force: true });
    res.status(200).json({ message: "Database synced succesfully" });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

// TEST ROUTE
dbController.get("/test", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log(`Database connection succesful`);
    res.status(200).json({ message: "Database connection succesful" });
  } catch (error) {
    console.error(`Error! Could not connect to the database: ${error}`);
    res
      .status(500)
      .json({ message: `Error! Could not connect to the database: ${error}` });
  }
});

// Seed database fra CSV filer
dbController.get("/seedfromcsv", async (req, res) => {
  try {
    // SENDER CSV DATA TIL DATABASE
    await seedFromCsv("gender.csv", genderModel);
    await seedFromCsv("staff.csv", staffModel);
    await seedFromCsv("user.csv", userModel);

    res.send({ message: "Seeding completed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
