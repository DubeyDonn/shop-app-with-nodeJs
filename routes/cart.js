import express from "express";

import {
  getallCarts,
  getSingleCart,
  createCart,
  replaceCart,
  updateCart,
  deleteCart,
} from "../controller/cart.js";

const router = express.Router();

export default router
  .get("/", getallCarts)
  .get("/:id", getSingleCart)
  .post("/", createCart)
  .put("/:id",  replaceCart)
  .patch("/:id", updateCart)
  .delete("/:id", deleteCart);
