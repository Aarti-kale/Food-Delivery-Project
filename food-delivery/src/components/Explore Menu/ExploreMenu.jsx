import React from "react";
import { menu_list } from "../../Images/Images";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu container py-5" id="explore-menu">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2
            className="display-4 fw-bold text-uppercase"
            style={{ fontSize: "2rem" }}
          >
            Explore Our Menu
          </h2>
        </div>
      </div>
      <div className="row flex-row flex-nowrap overflow-auto">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) => (prev === item.name ? "All" : item.name))
            }
            className="col-lg-2 col-md-6 col-8 mb-4"
            key={index}
            style={{ flex: "0 0 auto" }}
          >
            <div
              className={`card h-100 border-0 shadow-sm ${
                category === item.name ? "border border-primary" : ""
              }`}
            >
              <div
                className="card-img-top mx-auto mt-3 rounded-circle overflow-hidden"
                style={{
                  width: "150px",
                  height: "150px",
                  border:
                    category === item.name
                      ? "3px solid #ffc107"
                      : "3px solid transparent",
                }}
              >
                <img
                  src={item.image}
                  className={`w-100 h-100 ${
                    category === item.name ? "active" : ""
                  }`}
                  alt={item.name}
                  style={{
                    objectFit: "cover",
                    border: "3px solid transparent",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
              </div>
              <div className="card-footer text-center border-0 bg-white"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
