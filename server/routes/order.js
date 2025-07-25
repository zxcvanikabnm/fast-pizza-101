import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findOne({ id: req.params.id });

    if (!order) {
      return res.status(404).json({ error: `Order #${req.params.id} not found` });
    }

    res.json({ status: "success", data: order });
  } catch (err) {
    console.error("❌ Error fetching order:", err);
    res.status(500).json({ error: "Server error retrieving order" });
  }
});

export default router;
