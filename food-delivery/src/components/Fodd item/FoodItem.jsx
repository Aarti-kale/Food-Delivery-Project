import React, { useState, useRef, useEffect, useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ food }) => {
  const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);
  const [showCounter, setShowCounter] = useState(false);
  const ref = useRef(null);

  const handleAddToCart = () => {
    addToCart(food._id);
    setShowCounter(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(food._id);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowCounter(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="col-md-3" ref={ref} id="Footer">
      <div className="card mb-4">
        <div className="position-relative">
          <img
            src={url + "/images/" + food.image}
            alt={food.name}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div
            className="position-absolute"
            style={{ bottom: "10px", right: "10px" }}
          >
            {!showCounter && (
              <button
                className="btn"
                onClick={handleAddToCart}
                style={{
                  borderRadius: "50%",
                  padding: "10px 15px",
                  fontSize: "9px",
                  zIndex: 1,
                  backgroundColor: "#ffc107",
                  color: "black",
                  border: "none",
                }}
              >
                +
              </button>
            )}
            {showCounter && (
              <div
                className="d-flex align-items-center position-absolute"
                style={{ bottom: "0", right: "0" }}
              >
                <button
                  className="btn btn-dark"
                  onClick={handleRemoveFromCart}
                  style={{
                    borderRadius: "50%",
                    padding: "10px 15px",
                    fontSize: "9px",
                    color: "white",
                    backgroundColor: "black",
                    border: "none",
                    marginRight: "5px",
                  }}
                >
                  -
                </button>
                <span
                  className="mx-2"
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {cartItem[food._id] || 0}
                </span>
                <button
                  className="btn btn-light"
                  onClick={handleAddToCart}
                  style={{
                    borderRadius: "50%",
                    padding: "10px 15px",
                    fontSize: "9px",
                    color: "black",
                    backgroundColor: "white",
                    border: "none",
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">{food.name}</h5>
          <p className="card-text">{food.description}</p>
          <p className="card-text">
            <strong>Category:</strong> {food.category}
          </p>
          <p className="card-text">
            <strong>Price:</strong> ${food.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
