import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // Add this so it matches Jonas's IDs
  name: { type: String, required: true },
  ingredients: [String],
  unitPrice: { type: Number, required: true }, // not just "price"
  imageUrl: String,
  soldOut: { type: Boolean, default: false },
});

export default mongoose.model("MenuItem", menuItemSchema);
