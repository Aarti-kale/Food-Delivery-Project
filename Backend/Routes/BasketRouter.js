import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../Controllers/BasketController.js";
import authMiddleware from "../Middlewares/Auth.js";

const BasketRouter = express.Router();

BasketRouter.post("/add", authMiddleware, addToCart);
BasketRouter.post("/remove", authMiddleware, removeFromCart);
BasketRouter.post("/get", authMiddleware, getCart);

export default BasketRouter;
