import React from "react";
import fooddelivery from "../../Images/fooddelivery.png";
import "animate.css/animate.min.css";
import { FaUtensils, FaSmile, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 display-3 animate__animated animate__fadeInDown">
        <span className=" " style={{ color: "orange", fontWeight: "bold" }}>
          About
        </span>{" "}
        Aaru Food Delivery
      </h1>

      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <h2 className="h3 animate__animated animate__fadeInLeft text-success">
            Introduction
          </h2>
          <p className="fs-4 animate__animated animate__fadeInLeft text-muted">
            Welcome to <strong className="text-dark">Aaru Food Delivery</strong>
            , your go-to destination for{" "}
            <span className="text-success">fresh</span> and{" "}
            <span className="text-danger">fast</span> food delivery. Our passion
            for <span className="fw-bold">great meals</span> and{" "}
            <span className="text-primary">exceptional service</span> ensures
            every order is a delight.
          </p>
        </div>
        <div className="col-md-6 position-relative">
          <img
            src={fooddelivery}
            className="img-fluid rounded animate__animated animate__fadeInRight hover-zoom"
            alt="Food Delivery"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
          />
        </div>
      </div>

      <div className="row mb-5 text-center">
        <div className="col-md-6 mb-4 animate__animated animate__fadeInUp hover-effect">
          <h2 className="h3 text-success">Our Mission</h2>
          <p className="fs-5">
            To make dining{" "}
            <span className="fw-bold text-primary">
              convenient and delightful
            </span>{" "}
            with fast, fresh food. We aim to be the{" "}
            <span className="text-danger">most trusted</span> delivery service
            in the region.
          </p>
        </div>
        <div className="col-md-6 animate__animated animate__fadeInUp hover-effect">
          <h2 className="h3 text-success">Our Vision</h2>
          <p className="fs-5">
            We envision a world where everyone enjoys{" "}
            <span className="text-primary">high-quality, fresh meals</span>{" "}
            delivered to their doorsteps, revolutionizing the industry by
            focusing on{" "}
            <span className="fw-bold text-success">quality and efficiency</span>
            .
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-12 text-center animate__animated animate__zoomIn">
          <h2 className="h3 text-warning">Our Story</h2>
          <p className="lead fs-4">
            <span className="text-primary">Aaru Food Delivery</span> started
            with a simple goal: to make{" "}
            <span className="text-danger">restaurant-quality food</span> easily
            accessible. Since 2024, we've grown into a service delivering
            happiness to hundreds daily.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4 animate__animated animate__bounceIn hover-grow">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <FaUtensils
                className="mb-3"
                style={{ fontSize: "2rem", color: "orange" }}
              />
              <h3 className="h4 text-primary">Quality</h3>
              <p className="fs-5">
                Every meal is prepared with the{" "}
                <span className="fw-bold">freshest ingredients</span> and
                delivered with care.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 animate__animated animate__bounceIn delay-1s hover-grow">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <FaSmile
                className="mb-3"
                style={{ fontSize: "2rem", color: "green" }}
              />
              <h3 className="h4 text-primary">Customer Satisfaction</h3>
              <p className="fs-5">
                We prioritize your happiness and strive to{" "}
                <span className="fw-bold">exceed expectations</span> with every
                order.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 animate__animated animate__bounceIn delay-2s hover-grow">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <FaClock
                className="mb-3"
                style={{ fontSize: "2rem", color: "blue" }}
              />
              <h3 className="h4 text-primary">Reliability</h3>
              <p className="fs-5">
                We promise <span className="fw-bold">timely delivery</span> with{" "}
                <span className="text-success">reliable service</span> every
                time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center animate__animated animate__lightSpeedInLeft">
          <h2 className="h3 mb-4 text-warning">Why Choose Us?</h2>
          <p className="lead fs-4">
            At <span className="text-success">Aaru Food Delivery</span>, we
            don't just deliver food, we deliver{" "}
            <span className="fw-bold text-primary">
              happiness, care, and convenience
            </span>
            . Every meal is a{" "}
            <span className="text-danger">delightful experience</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
