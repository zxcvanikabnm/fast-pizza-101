import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // e.g. IIDSAT
  customer: { type: String, required: true },
  status: { type: String, default: "preparing" },
  priority: { type: Boolean, default: false },
  cart: [
    {
      pizzaId: Number,
      name: String,
      quantity: Number,
      unitPrice: Number,
      totalPrice: Number,
      addIngredients: [String],
      removeIngredients: [String],
    },
  ],
  estimatedDelivery: String,
  orderPrice: Number,
  priorityPrice: Number,
});

export default mongoose.model("Order", orderSchema);
