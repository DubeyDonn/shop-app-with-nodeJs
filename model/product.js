import mongoose, { Schema } from "mongoose";

// ##database schema
const productSchema = new Schema({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true, minlength: 10 },
  price: { type: Number, required: true, index: true, min: 0 },
  discountPercentage: Number,
  rating: { type: Number, min: 0, max: 5 },
  stock: { type: Number, min: 0 },
  brand: { type: String, index: true },
  category: { type: String, index: true },
  thumbnail: String,
  imageUrl: String,
});

// ##database model
const Product = mongoose.model("Product", productSchema);

export default Product;
