import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aartikale770:GYjXf3XoQ305zGj1@cluster0.z18rnhy.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
