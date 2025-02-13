import express from "express";
import staffModel from "../models/staffModel.js";

const router = express.Router();

// GET ALL STAFF
router.get("/staff", async (req, res) => {
  try {
    const staffs = await staffModel.findAll();
    res.status(200).json(staffs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET STAFF BY ID
router.get("/staff/:id", async (req, res) => {
  try {
    const staff = await staffModel.findByPk(req.params.id);
    if (staff) {
      res.status(200).json(staff);
    } else {
      res.status(404).json({ message: "Staff not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST NEW STAFF
router.post("/staff", async (req, res) => {
  try {
    const newStaff = await staffModel.create(req.body);
    res.status(201).json(newStaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT UPDATE STAFF
router.put("/staff/:id", async (req, res) => {
  try {
    const staff = await staffModel.findByPk(req.params.id);
    if (staff) {
      await staff.update(req.body);
      res.status(200).json(staff);
    } else {
      res.status(404).json({ message: "Staff not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE STAFF
router.delete("/staff/:id", async (req, res) => {
  try {
    const staff = await staffModel.findByPk(req.params.id);
    if (staff) {
      await staff.destroy();
      res.status(200).json({ message: "Staff deleted" });
    } else {
      res.status(404).json({ message: "Staff not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const staffController = router;
