import React from 'react';
import './carousel.css';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const navigate = useNavigate();

  return (
    <section className="row">
      <div className="col-md-12">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/Home-Banner-4.png" alt="Home Banner" className="d-block w-100" />
              <div className="carousel-caption splash-text">
                <h1 className="display-5 fw-bold splash-heading">Welcome to JerseyHub</h1>
                <p className="lead">Get the latest jerseys and sportswear.</p>
                <h2>Be A Part of the Game</h2>
                <button onClick={() => navigate("/GetProducts")} className="btn btn-success mt-2 w-100">Shop Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/jersey-5457103_1280 (1).jpg" alt="Football Jersey" className="d-block w-100" height="350" />
              <div className="carousel-caption splash-text">
                <h1 className="display-5 fw-bold splash-heading">Welcome to JerseyHub</h1>
                <p className="lead">Get the latest jerseys and sportswear.</p>
                <h2>Be A Part of the Game</h2>
                <button onClick={() => navigate("/GetProducts")} className="btn btn-success mt-2 w-100">Shop Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/jersey-5457183_640.jpg" alt="Basketball Jersey" className="d-block w-100" height="500" />
              <div className="carousel-caption splash-text">
                <h1 className="display-5 fw-bold splash-heading">Welcome to JerseyHub</h1>
                <p className="lead">Get the latest jerseys and sportswear.</p>
                <h2>Be A Part of the Game</h2>
                <button onClick={() => navigate("/GetProducts")} className="btn btn-success mt-2 w-100">Shop Now</button>
              </div>
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
  );
};

export default Carousel;
 