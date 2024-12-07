import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodParcel from "../../Images/FoodParcel.png";
import axios from "axios";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }
    console.log("Token ",token);
    console.log("url:",url);

    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          url + "/api/order/userorders",
          {},
          {
            headers: { token },
          }
        );
        if (response.data.success) {
          setData(response.data.data);
        } else {
          setErrorMessage("Failed to fetch orders.");
        }
      } catch (err) {
        setErrorMessage("Failed to fetch orders.");
      }
    };

    fetchOrders();
  }, [token, url]);

  const trackOrder = async (orderId) => {};

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-warning">My Orders</h2>
      <div className="row justify-content-center">
        {data.length === 0 ? (
          <p className="text-center text-muted">No orders found.</p>
        ) : (
          data.map((order) => (
            <div key={order._id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card shadow-lg h-100 p-3 mx-auto"
                style={{
                  backgroundColor: "#2c2c2c",
                  color: "#ffffff",
                  width: "300px",
                  height: "400px",
                }}
              >
                <div className="order-image text-center mb-3">
                  <img
                    src={FoodParcel}
                    alt="Order Image"
                    className="img-fluid rounded-circle"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="order-details">
                  <h5 className="mb-2">Order #{order._id}</h5>
                  <p className="mb-2">
                    {order.items.map((item, itemIndex) => (
                      <React.Fragment key={item._id || itemIndex}>
                        <span>
                          <strong>{item.name}</strong> x {item.quantity}
                          {itemIndex < order.items.length - 1 && ", "}
                        </span>
                      </React.Fragment>
                    ))}
                  </p>

                  <p className="text-muted mb-2">
                    <strong>Status:</strong> {order.status || "Order Placed"}
                  </p>

                  <p className="mb-3">
                    <strong>Total Amount:</strong> ${order.amount}
                  </p>
                </div>

                <div className="text-center mt-auto">
                  <button
                    className="btn btn-dark border border-warning w-100 text-uppercase font-weight-bold"
                    onClick={() => trackOrder(order._id)}
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
