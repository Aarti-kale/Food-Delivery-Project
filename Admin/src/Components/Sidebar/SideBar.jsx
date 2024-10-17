import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: "9999",
          background: "linear-gradient(45deg,black,white, black)",
          borderRadius: "50%",
          boxSahdow: " 0 4px 8 px rgba(0,0,0,0.3)",
        }}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div
        className={`offcanvas offcanvas-start ${isSidebarOpen ? "show" : ""}`}
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Admin Panel</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={toggleSidebar}
          ></button>
        </div>
        <div className="offcanvas-body bg-dark text-white">
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  activeTab === "dashboard" ? "active" : ""
                } text-white`}
                onClick={() => handleTabClick("dashboard")}
              >
                <i className="fas fa-home me-2"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add"
                className={`nav-link ${
                  activeTab === "addItem" ? "active" : ""
                } text-white`}
                onClick={() => handleTabClick("addItem")}
              >
                <i className="fas fa-plus me-2"></i> Add Items
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/list"
                className={`nav-link ${
                  activeTab === "listItems" ? "active" : ""
                } text-white`}
                onClick={() => handleTabClick("listItems")}
              >
                <i className="fas fa-list me-2"></i> List Items
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/orders"
                className={`nav-link ${
                  activeTab === "orders" ? "active" : ""
                } text-white`}
                onClick={() => handleTabClick("orders")}
              >
                <i className="fas fa-shopping-cart me-2"></i> Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}
    </>
  );
};

export default SideBar;
