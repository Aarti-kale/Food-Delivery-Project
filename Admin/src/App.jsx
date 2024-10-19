import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminNavbar from "./Components/Navbar/AdminNavbar";
import SideBar from "./Components/Sidebar/SideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Orders from "./Pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "https://food-delivery-backend-ivdw.onrender.com";

  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer />
      <AdminNavbar />
      <div className=" d-flex flex-grow-1">
        <SideBar />
        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
