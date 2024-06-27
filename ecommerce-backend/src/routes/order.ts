import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  allOrders,
  deleteOrder,
  getSingleOrder,
  myOrders,
  newOrder,
  processOrder,
} from "../controllers/order.js";

const app = express.Router();

// New Order - /api/v1/order/new
app.post("/new", newOrder);

// My Orders - /api/v1/order/my
app.get("/my", myOrders);

// All Orders - /api/v1/order/all
app.get("/all", adminOnly, allOrders);

// Get Order details, Process Order and Delete Order - /api/v1/order/:id
app
  .route("/:id")
  .get(getSingleOrder)
  .put(adminOnly, processOrder)
  .delete(adminOnly, deleteOrder);

export default app;
