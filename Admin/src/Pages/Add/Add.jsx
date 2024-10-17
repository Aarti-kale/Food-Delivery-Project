import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  // const url = 'http://localhost:4000';
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("price", formData.price);

    if (selectedFile) {
      formDataToSend.append("image", selectedFile, selectedFile.name);
    }

    try {
      const response = await axios.post(`${url}/api/food/add`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
        });
        setImagePreview(null);
        toast.success("Product added successfully!");
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <style>
        {`
          .form-label {
            color: black !important;
          }
          .form-control, .form-select {
            border: 2px solid black !important;
            color: black !important;
          }
          .btn-custom {
            background-color: black !important;
            color: white !important;
          }
          .card-header {
            background-color: black !important;
            color: white !important;
          }
          .image-preview {
            max-width: 100%;
            max-height: 200px;
            margin-top: 10px;
            display: block;
          }
        `}
      </style>
      <div className="card shadow-sm">
        <div className="card-header text-center">
          <h3>Add New Product</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleImageChange}
                required
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="image-preview"
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Category</option>
                <option value="salad">Salad</option>
                <option value="Burger">Burger</option>
                <option value="desert">Desert</option>
                <option value="Pasta">Pasta</option>
                <option value="Potato">Potato</option>
                <option value="Noodle Soup">Noodle Soup</option>
                <option value="Pizza">Pizza</option>
                <option value="Egg">Egg</option>
                <option value="Sandwitche">Sandwitch</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-custom">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
