import React, { Profiler, useContext, useState } from "react";
import logo from "../../Images/logo.png";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowlogin }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { calculateTotal, token, setToken } = useContext(StoreContext);
  const handleSearchIconClick = () => {
    console.log("Search clicked with query:", searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchIconClick();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#ffc107" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="logo"
            width="55"
            height="55"
            style={{ borderRadius: "50%", marginRight: "10px" }}
            className="d-inline-block align-top"
          />
          <span>Food Delivery</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item ms-lg-4">
              <Link
                to="explore-menu"
                smooth={true}
                duration={500}
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
              >
                Menu
              </Link>
            </li>

            <li className="nav-item ms-lg-4">
              <Link
                to="footer"
                smooth={true}
                duration={500}
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <NavLink
              to="/basket"
              className="text-decoration-none me-3 d-flex align-items-center"
            >
              <FaShoppingBasket size={30} className="text-dark" />
            </NavLink>
            {!token ? (
              <button
                className="btn btn-outline-light me-3"
                onClick={() => setShowlogin(true)}
              >
                Sign In
              </button>
            ) : (
              <div className="navbar-Profile dropdown">
                <i
                  className="bi bi-person-circle rounded"
                  width={40}
                  height={40}
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "28px", cursor: "pointer" }}
                ></i>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                  style={{ backgroundColor: "#fffff" }}
                >
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center p-2"
                      href="/myorders"
                      style={{
                        color: "#343a40",
                        backgroundColor: "transparent",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#e9ecef")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      <i
                        className="bi bi-bag-fill me-2"
                        style={{ color: "#343a40" }}
                      ></i>
                      Orders
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li onClick={handleLogout}>
                    <a
                      className="dropdown-item d-flex align-items-center p-2"
                      href="/"
                      style={{
                        color: "#dc3545",
                        backgroundColor: "transparent",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#e9ecef")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      <i
                        className="bi bi-box-arrow-right me-2"
                        style={{ color: "#dc3545" }}
                      ></i>{" "}
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <div className="d-flex align-items-center position-relative"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
