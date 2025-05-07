import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./placeOder.css";

const PlaceOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    product: '',
    quantity: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nDetails:\n${JSON.stringify(orderDetails, null, 2)}`);
    setOrderDetails({ name: '', email: '', product: '', quantity: 1 });
  };

  return (
    
    
    <div className="place-order-container">
      <div className="carousel-container">
        <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/1000940582.webp" className="d-block w-100" alt="Product 1" height="400" width= "100" />
            </div>
            <div className="carousel-item">
              <img src="images/download (7).jpeg" className="d-block w-100" alt="Product 2" height="400" width= "100" />
            </div>
            <div className="carousel-item">
              <img src="images/download (41).jpeg" className="d-block w-100" alt="Product 3" height="400" width= "100" />
            </div>
            <div className="carousel-item">
              <img src="images/images (15).jpeg" className="d-block w-100" alt="Product 3" height="400" width= "100" />
            </div>
            <div className="carousel-item">
              <img src="images/1001739834.webp" className="d-block w-100" alt="Product 3" height="400" width= "100" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="order-form-container">
        <h2>Place Your Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={orderDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={orderDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product" className="form-label">Product</label>
            <input
              type="text"
              className="form-control"
              id="product"
              name="product"
              value={orderDetails.product}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">No of jerseys</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={orderDetails.quantity}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="text" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={orderDetails.location}
              onChange={handleInputChange}
              required
            />
          </div>

         
          <button type="submit" className="btn btn-primary">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;