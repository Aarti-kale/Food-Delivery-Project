import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPopUp = ({ setShowlogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [popupMessage, setPopupMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setShowlogin(false);
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setPopupMessage("");
    setSuccessMessage("");
    setData({ name: "", email: "", password: "" }); // Reset form data on tab switch
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const loginUrl = `${url}/api/user/login`;

    try {
      const response = await axios.post(loginUrl, {
        email: data.email,
        password: data.password,
      });

      if (response.data.success) {
        const token = response.data.token;
        if (token) {
          setToken(token);
          localStorage.setItem("token", token);
          toast.success("Login successful!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
              backgroundColor: "#ffeb3b",
              color: "#333",
            },
          });

          setTimeout(() => {
            setShowlogin(false);
          }, 2000);
        } else {
          toast.error("Token is undefined, please check the server response.");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const onSignup = async (event) => {
    event.preventDefault();
    const signupUrl = `${url}/api/user/register`;

    try {
      const response = await axios.post(signupUrl, data);

      if (response.data.success) {
        toast.success("Sign up successful! You can now log in.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: "#ffeb3b",
            color: "#333",
          },
        });
        setData({ name: "", email: "", password: "" }); // Clear form data
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div
      className="modal fade show"
      id="authModal"
      tabIndex="-1"
      aria-labelledby="authModalLabel"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-light text-dark">
          <div className="modal-header border-0">
            <h5 className="modal-title text-warning" id="authModalLabel">
              Account
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <ul
              className="nav nav-pills nav-fill mb-3"
              id="authTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "login"
                      ? "active bg-warning text-dark"
                      : "bg-white text-dark"
                  }`}
                  onClick={() => handleTabSwitch("login")}
                  type="button"
                  role="tab"
                >
                  Login
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "signup"
                      ? "active bg-warning text-dark"
                      : "bg-white text-dark"
                  }`}
                  onClick={() => handleTabSwitch("signup")}
                  type="button"
                  role="tab"
                >
                  Sign Up
                </button>
              </li>
            </ul>
            <div className="tab-content" id="authTabContent">
              {activeTab === "login" && (
                <div
                  className="tab-pane fade show active"
                  id="login"
                  role="tabpanel"
                >
                  <form onSubmit={onLogin} className="mt-3">
                    <div className="mb-3 input-group">
                      <span
                        className="input-group-text bg-warning text-dark"
                        id="loginEmailIcon"
                      >
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control bg-light text-dark"
                        id="loginEmail"
                        name="email"
                        placeholder="Email address"
                        aria-describedby="loginEmailIcon"
                        value={data.email}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                    <div className="mb-3 input-group">
                      <span
                        className="input-group-text bg-warning text-dark"
                        id="loginPasswordIcon"
                      >
                        <i className="bi bi-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control bg-light text-dark"
                        id="loginPassword"
                        name="password"
                        placeholder="Password"
                        aria-describedby="loginPasswordIcon"
                        value={data.password}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning w-100 mb-3 text-dark"
                    >
                      Login
                    </button>
                  </form>
                </div>
              )}
              {activeTab === "signup" && (
                <div
                  className="tab-pane fade show active"
                  id="signup"
                  role="tabpanel"
                >
                  <form onSubmit={onSignup} className="mt-3">
                    <div className="mb-3 input-group">
                      <span
                        className="input-group-text bg-warning text-dark"
                        id="signupNameIcon"
                      >
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control bg-light text-dark"
                        id="signupName"
                        name="name"
                        placeholder="Full Name"
                        aria-describedby="signupNameIcon"
                        value={data.name}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                    <div className="mb-3 input-group">
                      <span
                        className="input-group-text bg-warning text-dark"
                        id="signupEmailIcon"
                      >
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control bg-light text-dark"
                        id="signupEmail"
                        name="email"
                        placeholder="Email address"
                        aria-describedby="signupEmailIcon"
                        value={data.email}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                    <div className="mb-3 input-group">
                      <span
                        className="input-group-text bg-warning text-dark"
                        id="signupPasswordIcon"
                      >
                        <i className="bi bi-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control bg-light text-dark"
                        id="signupPassword"
                        name="password"
                        placeholder="Password"
                        aria-describedby="signupPasswordIcon"
                        value={data.password}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning w-100 mb-3 text-dark"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              )}
            </div>
            {popupMessage && (
              <div className="alert alert-danger mt-3" role="alert">
                {popupMessage}
              </div>
            )}
            {successMessage && (
              <div className="alert alert-success mt-3" role="alert">
                {successMessage}
              </div>
            )}
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPopUp;
