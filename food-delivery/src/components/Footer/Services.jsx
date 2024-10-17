import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    console.log("useEffect called - scrolling to stop");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container py-5">
      <h1
        className="text-center mb-4 display-5 fw-bold  animate__animated animate__fadeInDown"
        style={{ color: "orange" }}
      >
        Our Food Delivery Services
      </h1>

      <p className="text-center lead mb-5 display-7">
        We offer a wide range of food delivery services tailored to your needs.
        Fast, convenient, and always fresh.
      </p>

      <div className="row g-4">
        <div className="col-md-4 animate__animated animate__fadeInLeft">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-truck fs-1 text-warning"></i>
              </div>
              <h5 className="card-title">Fast Delivery</h5>
              <p className="card-text">
                Get your food delivered to you in record time. Our optimized
                system ensures quick and accurate deliveries.
              </p>
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#fastDeliveryModal"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="fastDeliveryModal"
          tabIndex="-1"
          aria-labelledby="fastDeliveryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="fastDeliveryModalLabel">
                  Fast Delivery
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Our fast delivery service guarantees that your food arrives hot
                and fresh. Using our optimized routing system, we ensure you get
                your meals in the shortest possible time.
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 animate__animated animate__fadeInUp">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-utensils fs-1 text-danger"></i>
              </div>
              <h5 className="card-title">Wide Range of Cuisines</h5>
              <p className="card-text">
                Choose from a variety of cuisines that suit your taste. We offer
                everything from local favorites to international dishes.
              </p>
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#cuisinesModal"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="cuisinesModal"
          tabIndex="-1"
          aria-labelledby="cuisinesModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="cuisinesModalLabel">
                  Wide Range of Cuisines
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Our menu includes a diverse range of cuisines, including
                Italian, Chinese, Indian, and more. No matter what you crave,
                we’ve got it covered.
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 animate__animated animate__fadeInRight">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-award fs-1 text-success"></i>
              </div>
              <h5 className="card-title">Quality Ingredients</h5>
              <p className="card-text">
                We prioritize quality and ensure that all our meals are made
                from fresh and carefully sourced ingredients.
              </p>
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#ingredientsModal"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="ingredientsModal"
          tabIndex="-1"
          aria-labelledby="ingredientsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ingredientsModalLabel">
                  Quality Ingredients
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Every meal is prepared with the highest quality ingredients. We
                partner with local farms and suppliers to ensure freshness in
                every bite.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 g-4">
        <div className="col-md-6 animate__animated animate__fadeInUp">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-shield-check fs-1 text-info"></i>
              </div>
              <h5 className="card-title">Contactless Delivery</h5>
              <p className="card-text">
                Ensuring your safety is our priority. With contactless delivery,
                you can receive your food without direct contact.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 animate__animated animate__fadeInUp">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-clock fs-1 text-primary"></i>
              </div>
              <h5 className="card-title">24/7 Service</h5>
              <p className="card-text">
                We’re available around the clock to meet your food delivery
                needs. Order at any time of the day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h2 className="h3 text-success">
          Get Your Favorite Meals Delivered Now!
        </h2>
        <p className="fs-5">
          Why wait? Experience the best food delivery service with Aaru. Fresh,
          fast, and always reliable!
        </p>
        <Link
          to="/"
          className="btn btn-primary btn-lg"
          style={{ cursor: "pointer" }}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Services;
