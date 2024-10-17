import userModel from "../Models/UserModel.js";

const addToCart = async (req, res) => {
  // working but not stored in database
  // now this code is running perfectly
  try {
    let userData = await userModel.findById(req.body.userId);
    let basketData = await userData.basketData;
    if (!basketData[req.body.itemId]) {
      basketData[req.body.itemId] = 1;
    } else {
      basketData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { basketData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let basketData = await userData.basketData;
    if (basketData[req.body.itemId] > 0) {
      basketData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { basketData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// fetching basket data
const getCart = async (req, res) => {};

export { addToCart, removeFromCart, getCart };
