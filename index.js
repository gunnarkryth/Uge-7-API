import express from "express";
import { staffController } from "./controllers/staffController.js";
import { dbController } from "./controllers/dbController.js";
import "./models/index.js";

const port = 4242;
const app = express();

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hotel Overlook");
});

app.use(staffController);
app.use(dbController);

app.get("*", (req, res) => {
  res.send("404: kunne ikke finde filen");
});

app.listen(port, () => {
  console.log(`Express server kører på http://localhost:${port}`);
});
