import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// GET /menu — Return all menu items
router.get("/", async (req, res) => {
  try {
    const menu = await MenuItem.find();
    res.json({ data: menu });
  } catch (err) {
    console.error("Error fetching menu:", err);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

export default router;
