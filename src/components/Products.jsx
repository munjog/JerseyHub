import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./products.css";
import Footer from "./Footer";
import Navbar from "./navbar2";

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
      <section className="row">
      <div className="col-md-12">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/Home-Banner-4.png" alt="" className="d-block w-100" height="350" />
            </div>
            <div className="carousel-item">
              <img src="images/jersey-5457103_1280 (1).jpg" alt="" className="d-block w-100" height="350" />
            </div>
            <div className="carousel-item">
              <img src="images/jersey-5457183_640.jpg" alt="" className="d-block w-100" height="350" />
            </div>
            <div className="carousel-caption splash-text">
  <h1 className="display-5 fw-bold splash-heading">Welcome to JerseyHub</h1>
  <p className="lead splash-paragraph">Your one-stop shop for premium jerseys and sportswear.</p>
  <button onClick={() => navigate("/Getproducts")} className="btn btn-success mt-2 splash-button">
    Shop Now
  </button>
</div>
          </div>

          <a href="#mycarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a href="#mycarousel" className="carousel-control-next" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
          <ol className="carousel-indicators">
            <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>

      
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
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#001933] text-white p-6 md:p-16">
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h1 className="text-4xl font-bold text-lime-400 mb-6">
          QUALITY IS OUR SPECIALITY
        </h1>
        <p className="text-base leading-relaxed">
          The Jersey Hub has always been and will be known for providing the best quality along with the best
          service consistently, the precision and minute details in our products is what makes us stand out
          when compared to our competition. Our products are imported only when we know the fabric is right.
          You won't find the same quality anywhere in the market.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="images/download (3).jpeg"
          alt="Argentina Jersey"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </div>
    </div>


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