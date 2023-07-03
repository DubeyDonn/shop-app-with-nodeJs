import express from "express";

import {
  getallProducts,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

const router = express.Router();

export default router
  .get("/", getallProducts)
  .get("/:id", getSingleProduct)
  .post("/", createProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);
