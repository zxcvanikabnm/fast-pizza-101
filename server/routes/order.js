import express from "express";
import Order from "../models/Order.js";
import { v4 as uuid } from "uuid";

const router = express.Router();

// get order
router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findOne({ id: req.params.id });

        if (!order) {
            return res
                .status(404)
                .json({ error: `Order #${req.params.id} not found` });
        }

        res.json({ status: "success", data: order });
    } catch (err) {
        console.error("❌ Error fetching order:", err);
        res.status(500).json({ error: "Server error retrieving order" });
    }
});

// create new order
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // Parse cart if it's sent as a string (from some forms or fetch)
    if (typeof data.cart === "string") {
      data.cart = JSON.parse(data.cart);
    }

    // Convert string "true"/"false" to real booleans
    data.priority = String(data.priority) === "true";

    // Generate a short order ID (like "LQOGGX")
    data.id = uuid().slice(0, 6).toUpperCase();

    // Calculate prices
    const orderPrice = data.cart.reduce((sum, item) => sum + item.totalPrice, 0);
    data.orderPrice = orderPrice;
    data.priorityPrice = data.priority ? Math.round(orderPrice * 0.2) : 0;

    // Set status and estimated delivery
    data.status = "preparing";
    const est = new Date();
    est.setMinutes(est.getMinutes() + (data.priority ? 30 : 60));
    data.estimatedDelivery = est.toISOString();

    const newOrder = await Order.create(data);

    res.status(201).json({
      status: "success",
      data: {
        orderId: newOrder.id,
      },
    });
  } catch (err) {
    console.error("❌ Error creating order:", err);
    res.status(400).json({ error: "Failed to create order" });
  }
});

export default router;
