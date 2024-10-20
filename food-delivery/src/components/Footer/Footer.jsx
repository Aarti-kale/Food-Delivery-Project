import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-dark text-white py-5" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact Us </h5>
            <ul className="list-unstyled">
              <li>Address:  Ramdoh street, Ramdoh, India</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Email: aartikale750@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com/login"
                  className="text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook me-2"></i>Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/login"
                  className="text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter me-2"></i>Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login"
                  className="text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram me-2"></i>Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 style={{ color: "orange", fontWeight: "bold" }}>
              Aaru Food Delivery{" "}
            </h5>
            <p>
              We are dedicated to delivering fresh and delicious food right to
              your doorstep. Our mission is to make every meal memorable by
              offering a wide range of cuisines, prepared with the finest
              ingredients and delivered with care.{" "}
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Aaru Food Delivery. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-end">
            <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <Link to="privacy" className="text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="terms" className="text-primary">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
