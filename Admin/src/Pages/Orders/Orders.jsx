import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Orders = ({ url }) => {
  const [Orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-center text-warning mb-4">Order Page</h3>

      <div className="row">
        {Orders.map((order, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-lg h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-warning">Order #{index + 1}</h5>

                {/* Order Information */}
                <p className="card-text">
                  <strong>Customer:</strong> {order.address.firstName}{" "}
                  {order.address.lastName}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {order.address.street},{" "}
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country} - {order.address.pincode}
                </p>
                <p className="card-text">
                  <strong>Phone:</strong> {order.address.phone}
                </p>

                {/* Ordered Items */}
                <div className="mb-2">
                  <strong>Ordered Items:</strong>
                  <ul
                    className="list-group mt-2"
                    style={{ maxHeight: "80px", overflowY: "auto" }}
                  >
                    {order.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {item.name}
                        <span className="badge bg-dark rounded-pill">
                          x{item.quantity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order Amount */}
                <p className="mt-auto mb-2">
                  <strong>Items:</strong> {order.items.length} <br />
                  <strong>Amount:</strong> ${order.amount}
                </p>

                {/* Order Status Dropdown */}
                <select
                  className="form-select mt-auto"
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                >
                  <option value="Food processing">Food Processing</option>
                  <option value="Out for delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
