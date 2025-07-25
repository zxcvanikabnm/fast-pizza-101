import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import menuRoutes from "./routes/menu.js";

dotenv.config(); // Load .env

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/menu", menuRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });
