import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const List = ({ url }) => {
  // const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove/`, {
      id: foodId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success("Item removed successfully");
    } else {
      toast.error("Error removing item");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center text-warning mb-4">All Foods List</h2>
      <div className="row">
        {list.map((item, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title text-warning">{item.name}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${item.price}
                </p>
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => removeFood(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
