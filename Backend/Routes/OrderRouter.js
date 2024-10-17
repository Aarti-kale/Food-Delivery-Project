import express from "express";
import authMiddleware from "../Middlewares/Auth.js";
import {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
} from "../Controllers/OrderController.js";

const OrderRouter = express.Router();

OrderRouter.post("/place", authMiddleware, placeOrder);
OrderRouter.post("/verify", verifyOrder);
OrderRouter.post("/userorders", authMiddleware, userOrders);
OrderRouter.get("/list", listOrders);
OrderRouter.post("/status", updateStatus);

export default OrderRouter;
