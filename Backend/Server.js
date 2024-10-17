import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db.js";
import foodRouter from "./Routes/FoodRouter.js";
import userRouter from "./Routes/UserRouter.js";
import "dotenv/config.js";
import BasketRouter from "./Routes/BasketRouter.js";
import OrderRouter from "./Routes/OrderRouter.js";

const allowedOrigins = [
  "http://localhost:4000",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://192.168.25.249:3000",
];

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "the CORS policy for this site does not allow acess from the specified origin";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// db connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("Uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", BasketRouter);
app.use("/api/order", OrderRouter);

app.get("/", (req, res) => {
  res.send("Api working");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An internal server error occured ." });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server Started on http://0.0.0.0:${port}`);
});
