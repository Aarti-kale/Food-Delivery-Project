import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Basket from "./Pages/Basket/Basket";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/Login PopUp/LoginPopUp";
import Verify from "./Pages/Verify/verify";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Services from "./components/Footer/Services";
import About from "./components/Footer/About";
import Contact from "./components/Footer/Contact";
const App = () => {
  const [showlogin, setShowlogin] = useState(false);
  return (
    <>
      {showlogin && <LoginPopUp setShowlogin={setShowlogin} />}
      <div className={showlogin ? "content-blur" : "app"}>
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer id="footer" />
    </>
  );
};

export default App;
