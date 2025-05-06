import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./products.css";
import Footer from "./Footer";
import Navbar from "./navbar2";
import Carousel from "./Carousel";

const HomePage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Football Jerseys", image: "images/download (42).jpeg", path: "/category/football" },
    { name: "Basketball Jerseys", image: "images/download (30).jpeg", path: "/category/basketball" },
    { name: "Baseball Jerseys", image: "images/images (17).jpeg", path: "/category/baseball" },
    { name: "Boots", image: "images/download (27).jpeg", path: "/category/custom" },
  ];

  const featuredProducts = [
    { name: "Manchester United Jersey", image: "images/download (9).jpeg", price: "1500 KES" },
    { name: "Crystal Palace", image: "images/download (6).jpg", price: "2000 KES" },
    { name: "Bournmouth", image: "images/aNVoMRCOvPlScld-small.jpg", price: "1800 KES" },
  ];
  


  return (
    <>
      <Navbar/>
      <br />
      {/* Hero Section with Carousel */}
      <Carousel />

      
      <div className="container mt-5">
        <h2 className="text-center">Shop by Category</h2>
        <div className="row mt-4">
          {categories.map((category, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card category-card" onClick={() => navigate("/Getproducts")}>
                <img src={category.image} alt={category.name} className="card-img-top category-image" />
                <div className="card-body text-center">
                  <h5 className="card-title">{category.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mt-5">
        <h2 className="text-center">Featured Products</h2>
        <div className="row mt-4">
          {featuredProducts.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card product-card">
                <img src={product.image} alt={product.name} className="card-img-top product-image" />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-warning" onClick={() => navigate("/cart")}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
  


      {/* Newsletter Section */}
      <div className="newsletter-section text-center mt-5 p-4">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on new arrivals and exclusive offers.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" className="form-control" />
          <button className="btn btn-primary mt-2">Subscribe</button>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default HomePage;