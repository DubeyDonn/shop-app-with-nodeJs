import express from "express";

import {
  getallOrders,
  getSingleOrder,
  createOrder,
  replaceOrder,
  updateOrder,
  deleteOrder,
} from "../controller/order.js";

const router = express.Router();

export default router
  .get("/", getallOrders)
  .get("/:id", getSingleOrder)
  .post("/", createOrder)
  .put("/:id",  replaceOrder)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder);
