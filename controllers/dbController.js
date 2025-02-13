import express from "express";
import sequelize from "../config/sequelizeConfig.js";

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
