import OrderModel from "../Models/OrderModel.js";
import UserModel from "../Models/UserModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = "https://food-delivery-frontend-rleg.onrender.com";

  try {
    console.log("Request Body for Order Placement:", req.body);

    const newOrder = new OrderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    await UserModel.findByIdAndUpdate(req.body.userId, { BasketData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    console.log("Mapped line items for Stripe:", line_items);

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log("Error placing order:", error);
    res.json({ success: false, message: "Error placing order" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success === "true") {
      await OrderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Payment successful" });
    } else {
      await OrderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.log("Error verifying order:", error);
    res.json({ success: false, message: "Error verifying order" });
  }
};

const userOrders = async (req, res) => {
  try {
    console.log("Request Body for fetching user orders:", req.body);

    const orders = await OrderModel.find({ userId: req.body.userId });

    console.log("Fetched user orders:", orders);

    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ success: false, message: "Error fetching orders." });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

const updateStatus = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const result = await OrderModel.findByIdAndUpdate(
      req.body.orderId,
      { status: req.body.status },
      { new: true }
    );

    console.log("Update result:", result);

    if (result) {
      res.json({ success: true, message: "Updated" });
    } else {
      res.json({ success: false, message: "Order not found" });
    }
  } catch (error) {
    console.log("Error updating status:", error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
