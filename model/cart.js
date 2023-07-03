import mongoose, { Schema } from "mongoose";

// ##database schema
const cartSchema = new Schema({
  title: { type: String, required: true, index: true },

  price: { type: Number, required: true, index: true, min: 0 },
  discountPercentage: Number,
  totalPrice: { type: Number, required: true, index: true, min: 0 },
  discountPercentage: Number,
  rating: { type: Number, min: 0, max: 5 },
  stock: { type: Number, min: 0 },
  quantity: { type: Number, required: true, min: 0 },
  brand: { type: String, index: true },
  category: { type: String, index: true },
  thumbnail: String,
  productId: { type: String, required: true, index: true },
});

// ##database model
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
