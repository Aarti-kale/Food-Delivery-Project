import React, { useEffect, useState } from "react";
import backgroundImage from "../../Images/Header.png";
import { Link } from "react-scroll";
const Header = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <style>
        {`
      @keyframes fadeInUp{
        from{
          opacity:0;
          transform:translate3d(0,100%,0)
        }
        to {
          opacity:1;
          transform:none;
        }
      }
      .fade-in-up{
        animation:fadeInUp 1s ease-out;
      }
      `}
      </style>
      <div
        className="d-flex align-items-center justify-content-center text-center mx-auto"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#333",
          padding: "60px 15px",
          height: "90vh",
          width: "100%",
        }}
      >
        <div className="container">
          <div className={animate ? "fade-in-up" : ""}>
            <h2
              className="mb-4"
              style={{ fontSize: "3rem", fontWeight: "bold" }}
            >
              Delicious Food, Deleivered Fresh
            </h2>
            <p
              className="lead"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Explore a diverse menu featuring a delightful array crafted with
              the finest ingredients.
            </p>
            <Link to="explore-menu">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#ffc107",
                  borderColor: "ffc107",
                  fontSize: "1.25rem",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "30px",
                }}
              >
                View Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
