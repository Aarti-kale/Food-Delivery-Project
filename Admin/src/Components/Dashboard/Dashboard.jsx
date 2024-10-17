import React from "react";
import logo from "../../assets/logo.png";

const Dashboard = () => {
  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="text-center">
        <img
          src={logo}
          alt="Admin logo"
          className="img-fluid logo mb-4"
          style={{
            width: "100px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            marginTop: "120px",
          }}
        />
        <h1>Welcome to the Admin Panel</h1>
        <p>This is the dashboard where you can manage your application.</p>
      </div>
    </div>
  );
};

export default Dashboard;
