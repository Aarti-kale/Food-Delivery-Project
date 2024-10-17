import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h1
        className="text-center mb-4 display-5 fw-bold"
        style={{ color: "orange" }}
      >
        Contact Us
      </h1>
      <p className="text-center lead mb-5">
        Have questions, feedback, or need support? We're here to help. Reach out
        to us!
      </p>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <i
            className="bi bi-geo-alt-fill"
            style={{ fontSize: "2rem", color: "orange" }}
          ></i>
          <p className="mt-2 fw-bold">123 Food Street, Food City, FC 12345</p>
        </div>
        <div className="col-md-4">
          <i
            className="bi bi-telephone-fill"
            style={{ fontSize: "2rem", color: "orange" }}
          ></i>
          <p className="mt-2 fw-bold">+1 (123) 456-7890</p>
        </div>
        <div className="col-md-4">
          <i
            className="bi bi-envelope-fill"
            style={{ fontSize: "2rem", color: "orange" }}
          ></i>
          <p className="mt-2 fw-bold">support@fooddelivery.com</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12 text-center">
          <h3 className="mb-4">Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094377!2d144.9537353155049!3d-37.81720997975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb7a79220257db%3A0xd87d2c0803dfbae9!2sRamdoha%2C%20Maharashtra%20414603!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            className="border"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-center mb-4">Frequently Asked Questions</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How do I place an order?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can place an order through our website by selecting your
                  favorite dishes and following the checkout process.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What are your delivery hours?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We deliver from 9:00 AM to 10:00 PM every day. However,
                  delivery hours may vary based on location and restaurant
                  availability.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I track my order?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, once your order is confirmed, you can track its status in
                  real-time through our website.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
