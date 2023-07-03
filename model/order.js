import mongoose, { Schema } from "mongoose";

// ##database schema
const orderSchema = new Schema({
  cart: {
    type: [
      {
        title: { type: String, required: true, index: true },
        price: { type: Number, required: true, index: true, min: 0 },
        totalPrice: { type: Number, required: true, index: true, min: 0 },
        quantity: { type: Number, required: true, min: 0 },
        productId: { type: String, required: true, index: true },
      },
    ],
    required: true,
    index: true,
  },
  userId: { type: String, index: true },
});

// ##database model
const Order = mongoose.model("Order", orderSchema);

export default Order;
