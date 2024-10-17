import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../Fodd item/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="container mt-5">
      <h2
        className="text-center mb-4"
        style={{ color: "#343a40", fontWeight: "bold" }}
      >
        Top Dishes Near You
      </h2>
      <div className="row">
        {food_list && food_list.length > 0 ? (
          food_list.map(
            (food) =>
              (category === "All" || category === food.category) && (
                <FoodItem key={food._id} food={food} />
              )
          )
        ) : (
          <p>No food items available</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
