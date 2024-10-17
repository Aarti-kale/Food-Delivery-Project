import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { cartItem, calculateTotal, food_list, token, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeholder = async (event) => {
    event.preventDefault();
    console.log("Placeholder function called");
    const form = event.target;

    console.log("Form element:", form);

    console.log("Form validity check");

    if (!form.checkValidity()) {
      console.log("Form is invalid");
      form.reportValidity();
      return;
    }

    console.log("Form is valid");

    let orderItem = [];
    console.log("Food List:", food_list);
    console.log("Cart Item:", cartItem);

    food_list.forEach((item) => {
      if (cartItem[item._id] && cartItem[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItem[item._id];
        orderItem.push(itemInfo);
      }
    });

    console.log("Order items being sent to backend:", orderItem);

    navigate("/payment");

    let orderData = {
      address: data,
      items: orderItem,
      amount: calculateTotal() + 2,
    };

    try {
      console.log("Sending order data:", orderData);
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      console.log("Response received:", response.data);

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/basket");
    } else if (calculateTotal() === 0) {
      navigate("/basket");
    }
  }, [token]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Place Your Order</h2>
              <form onSubmit={placeholder}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    onChange={onChangeHandler}
                    value={data.firstName}
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    onChange={onChangeHandler}
                    value={data.lastName}
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="street" className="form-label">
                    Street Address
                  </label>
                  <input
                    name="street"
                    onChange={onChangeHandler}
                    value={data.street}
                    type="text"
                    className="form-control"
                    id="street"
                    placeholder="Enter your street address"
                    required
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      name="city"
                      onChange={onChangeHandler}
                      value={data.city}
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      name="state"
                      onChange={onChangeHandler}
                      value={data.state}
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="Enter your state"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="pincode" className="form-label">
                      Pincode
                    </label>
                    <input
                      name="pincode"
                      onChange={onChangeHandler}
                      value={data.pincode}
                      type="text"
                      className="form-control"
                      id="pincode"
                      placeholder="Enter your pincode"
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input
                      name="country"
                      onChange={onChangeHandler}
                      value={data.country}
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Enter your country"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    onChange={onChangeHandler}
                    value={data.phone}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="text-center">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title text-center text-warning">
                        Order Summary
                      </h4>
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
                        type="submit"
                        className="btn btn-warning w-100 text-dark"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
