import FoodModel from "../Models/FoodModel.js";
import fs from "fs";

// add fooditems

const addFood = async (req, res) => {
  console.log("Request file", req.file);
  let image_filename = `${req.file.filename}`;

  const food = new FoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listfood = async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food
const removefood = async (req, res) => {
  try {
    const food = await FoodModel.findById(req.body.id);
    fs.unlink(`Uploads/${food.image}`, () => {});

    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { addFood, listfood, removefood };
