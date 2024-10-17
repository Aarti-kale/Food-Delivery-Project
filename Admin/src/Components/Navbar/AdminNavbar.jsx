import React from "react";
import logo from "../../assets/logo.png";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle me-2"
          />
          Admin Panel
        </a>
      </div>
    </nav>
  );
};

export default AdminNavbar;
