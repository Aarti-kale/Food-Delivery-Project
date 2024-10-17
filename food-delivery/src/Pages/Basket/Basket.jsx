import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Basket = () => {
  const { cartItem, food_list, removeFromCart, calculateTotal, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const getItemDetails = (itemId) => {
    return food_list.find((item) => item._id === itemId);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 text-center text-warning">Your Basket</h2>
      <div className="row">
        <div className="col-lg-8">
          {Object.keys(cartItem).length === 0 ? (
            <div className="alert alert-warning text-center" role="alert">
              Your basket is empty
            </div>
          ) : (
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {food_list.map((item, index) => {
                        if (cartItem[item._id] > 0) {
                          return (
                            <tr key={index}>
                              <td style={{ minWidth: "100px" }}>
                                <img
                                  src={url + "/images/" + item.image}
                                  alt={item.name}
                                  className="img-fluid"
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                  }}
                                />
                              </td>
                              <td>{item.name}</td>
                              <td>${item.price.toFixed(2)}</td>
                              <td>{cartItem[item._id]}</td>
                              <td>
                                ${(item.price * cartItem[item._id]).toFixed(2)}
                              </td>
                              <td>
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => removeFromCart(item._id)}
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-4">
          {Object.keys(cartItem).length > 0 && (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center text-warning">Summary</h4>
                <p className="card-text text-dark">
                  Total Items:{" "}
                  <strong>
                    {Object.values(cartItem).reduce(
                      (total, quantity) => total + quantity,
                      0
                    )}
                  </strong>
                </p>
                <p className="card-text text-dark">
                  Total Price: <strong>${calculateTotal()}</strong>
                </p>
                <button
                  onClick={() => navigate("/order")}
                  className="btn btn-warning w-100 text-dark"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
